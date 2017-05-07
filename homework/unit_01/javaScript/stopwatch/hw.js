// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 00,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    //the display should be updated every 10 ms per instructions
    // millisecs = millisecs +10???
    Stopwatch.millisecs = Stopwatch.millisecs + 10;
    if (Stopwatch.millisecs%1000 === 0) {
      Stopwatch.millisecs = 0;
      Stopwatch.secs = Stopwatch.secs + 1;
    } else if (Stopwatch.secs === 60) {
      Stopwatch.secs = 0;
      Stopwatch.mins = Stopwatch.mins + 1;
    }
  },

  reset: function(){
    // Your Code Here
    Stopwatch.mins = 0;
    Stopwatch.secs = 0;
    Stopwatch.millisecs = 0;
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    Stopwatch.laps = [];
    ViewEngine.updateLapListDisplay();
  },

  start: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      return;
    } else if (Stopwatch.isRunning === false) {
      Stopwatch.isRunning = true;
      Stopwatch.tickClock();
    }
  },
  stop: function(){
    // Your Code Here
    Stopwatch.isRunning = false;
  },

  lap: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      var lapToCapture = {
        mins: Stopwatch.mins,
        secs: Stopwatch.secs,
        millisecs: Stopwatch.millisecs
      };
      Stopwatch.laps.push(lapToCapture);
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here

    $('#mins').html(ViewHelpers.zeroFill(mins, 2));
    $('#secs').html(ViewHelpers.zeroFill(secs, 2));
    $('#millisecs').html(ViewHelpers.zeroFill(millisecs, 2));

  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    var theMilliseconds = ViewHelpers.zeroFill(Stopwatch.millisecs, 2);
    if (Stopwatch.isRunning === true) {
      for (var i=0; i < laps.length; i++) {
        var lapToAppend = laps[i].mins+':'+laps[i].secs+':'+laps[i].millisecs;
      }
      $('#lap-list').append('<li></li>');
      $('li:last-child').html(lapToAppend);
    } else if (Stopwatch.isRunning === false) {
      $('#lap-list').html('');
    }
  }
};


const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    // supposed to use number and length parameters here
    // number
    if (number.toString().length > length) {
      number = number / 10;
      return number.toString();
    } else if (number.toString().length < length) {
      number = '0'+number.toString();
      return number;
    } else {
      return number.toString();
    }
  },
};


/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    // Your Code Here
    Stopwatch.start();
  },
  handleClickStopReset: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {Stopwatch.stop();}
    else if (Stopwatch.isRunning === false) {Stopwatch.reset();}
  },
  handleClickLap: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      Stopwatch.lap();
    } else if (Stopwatch.isRunning === false) {
      return;
    }
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
  $('#stop').on('click', AppController.handleClickStopReset);
  $('#lap').on('click', AppController.handleClickLap);
};
