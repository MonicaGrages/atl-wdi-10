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
    Stopwatch.secs = Math.floor(Stopwatch.secs + 0.01);
    Stopwatch.mins = Math.floor(Stopwatch.min + 0.000166667);
  },
  reset: function(){
    // Your Code Here

  },
  start: function(){
    // Your Code Here
    console.log("Stopwatch.start function was called");
    Stopwatch.isRunning = true;
    Stopwatch.tickClock();
    console.log(Stopwatch.isRunning);
  },
  stop: function(){
    // Your Code Here
    Stopwatch.isRunning = false;
    console.log(Stopwatch.isRunning);
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    $('#mins').html(Stopwatch.mins);
    $('#secs').html(Stopwatch.secs);
    $('#millisecs').html(Stopwatch.millisecs);
  },
  handleClickStart: function() {
    // Your Code Here

    console.log("called handleClickStart fx");
    Stopwatch.start();
  },
  handleClickStopReset: function(){
    // Your Code Here
    console.log("called handleClickStopReset fx");
    Stopwatch.stop();
  },
  handleClickLap: function(){
    // Your Code Here
    console.log("called handleClickLap fx");
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
  $('#stop').on('click', AppController.handleClickStopReset);
  $('#lap').on('click', AppController.handleClickLap);
};
