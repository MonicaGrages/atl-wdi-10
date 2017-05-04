window.onload = function() {
var firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", function() {
  alert("You have clicked button one");
});

var secondButton = document.getElementById("secondButton");
secondButton.addEventListener("click", function () {
  var newParagraph = document.createElement("p");
  // var newParagraphText = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
  newParagraph.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
  // newParagraph.appendChild(newParagraphText);
  document.getElementById("information").appendChild(newParagraph);

});


var thirdButton = document.getElementById("thirdButton");
thirdButton.addEventListener("click", function () {
  //this is the body of the third button's fx
  var divToRemoveChildParagraphFrom = document.getElementById("information");
  divToRemoveChildParagraphFrom.removeChild(divToRemoveChildParagraphFrom.childNodes[0]);
});





//the next } is the end of the window.onload fx
}
