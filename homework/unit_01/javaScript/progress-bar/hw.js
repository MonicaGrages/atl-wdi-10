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
    console.log("progressBarPercent = "+progressBarPercent);
    var progressBarClass = document.querySelector(".progress-bar");
    progressBarClass.style.width = progressBarPercent+"%";

  },
  drawLitFuses: function(timerValue){
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
