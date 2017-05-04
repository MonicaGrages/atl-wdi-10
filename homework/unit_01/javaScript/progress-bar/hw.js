// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    var numericDisplay = document.getElementById("numeric-display");
    numericDisplay.innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    var progressBarPercent = 100 - timerValue;
    var progressBarClass = document.querySelector(".progress-bar");
    progressBarClass.style.width = progressBarPercent+"%";

  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var percentBurnt = 100 - timerValue;
    var percentLeftToBurn = timerValue;
    var burntBar = document.querySelector(".burnt");
    var unburntBar = document.querySelector(".unburnt");
    unburntBar.style.width = (percentLeftToBurn*.98)+"%";
    burntBar.style.width = (percentBurnt*.98)+"%";

  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var secondsCrawled = 100 - timerValue;
    var theBug = document.querySelector(".crawler");
    theBug.style.marginLeft = secondsCrawled*10+"px";
    // theBug.style.marginBottom = secondsCrawled*10+"px";
    // ???


    // bug will crawl all the way across the screen if screen width
    // is <=1000px (100 seconds x 10 pixels per second)
  }
};
