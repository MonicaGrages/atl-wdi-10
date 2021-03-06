// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  var theSum = 0;
  for (i = 0; i < numsArray.length; i++) {
    theSum = theSum + numsArray[i];
  }
  return theSum;
};


// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  var newArray = [];
  for (var i=0; i<numsArray.length; i++) {
    if (numsArray[i] > 10) {
      newArray.push(numsArray[i]);
    }
  }
  return newArray;
};
numsGreaterThanTen([30, 20, 10, 0]);




// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  if (numsArray.length === 0) {
    return true;
  }
  var numbersGreaterThanTen = [];
  for (var i=0; i < numsArray.length; i++) {
    if (numsArray[i] <= 10) {
      numbersGreaterThanTen.push(numsArray[i]);
    }
  }
  if (numbersGreaterThanTen.length === 0) {
    areTheyAllGreaterThanTen = true;
  } else {
    areTheyAllGreaterThanTen = false;
  }
return areTheyAllGreaterThanTen;
};
allGreaterThanTen([25, 5, 12]);



// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
var arrayOfWordsWithAtLeastFiveLetters = [];
for (i=0; i<words.length; i++) {
  if (words[i].length >= 5) {
    arrayOfWordsWithAtLeastFiveLetters.push(words[i]);
  }
}
return arrayOfWordsWithAtLeastFiveLetters;
};
wordsWithAtLeastFiveLetters(["tomato", "peas", "watermelon", "lemon", "kiwi"]);



// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  if (words.length === 0) {
    return true;}
  for (i=0; i<words.length; i++) {
    words[i].toLowerCase();
    if ((words[i])[0] !== "a") {
      return false;
    } else {
     return true;
   }
  }
};
allStartingWithA(["apple", "Anna", "ants", "art"]);




// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  for (i = 0; i < words.length; i++) {
    if (words[i][0] === "b") {
      return true;
    }
    else {
      return false;
    }
  }
};
anyStartingWithB(["bananas", "tacos", "strawberry"]);





// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  if (n < 0) {
    return null;
  } else {
    numberOfVowels = 0;
    word = word.toLowerCase();
    for (var i =0; i < word.length; i++) {
      switch (word[i]) {
      case "a" :
        numberOfVowels ++;
        break
      case "e" :
        numberOfVowels ++;
        break;
      case "i" :
        numberOfVowels ++;
        break;
      case "o" :
        numberOfVowels ++;
        break;
      case "u" :
        numberOfVowels ++;
        break;
      }
    }
    if (numberOfVowels >= n) {
      return true;
    } else {
      return false;
    }
  }
};
hasAtLeastNVowels("watermelon", 3);





// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  var newArrayOfWordsWithAtLeastTwoVowels = [];
  for (var i = 0; i < words.length; i++) {
    var numberOfVowels = 0;
    for (var j = 0; j < words[i].length; j++) {
      switch (words[i][j]) {
        case "a" :
          numberOfVowels++;
          break;
        case "e" :
          numberOfVowels++;
          break;
        case "i" :
          numberOfVowels++;
          break;
        case "o" :
          numberOfVowels++;
          break;
        case "u" :
          numberOfVowels++;
          break;
      }
    }
    if (numberOfVowels >= 2) {
      newArrayOfWordsWithAtLeastTwoVowels.push(words[i]);
    }
  }
  return newArrayOfWordsWithAtLeastTwoVowels;
};
wordsWithAtLeastTwoVowels(["dogs", "mermaid", "cat", "banana"]);






// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
    for (var i = 0; i < words.length; i++) {
      var numberOfVowels = 0;
      words[i].toLowerCase();
      for (var j = 0; j < words[i].length; j++) {
        switch (words[i][j]) {
          case "a" :
            numberOfVowels++;
            break;
          case "e" :
            numberOfVowels++;
            break;
          case "i" :
            numberOfVowels++;
            break;
          case "o" :
            numberOfVowels++;
            break;
          case "u" :
            numberOfVowels++;
            break;
        }
      }
      if (numberOfVowels < 2) {
          return false;
      }
    }
    return true;
};
allHaveAtLeastTwoVowels(["cat"]);






// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  for (var i = 0; i < words.length; i++) {
      var numberOfVowels = 0;
      words[i].toLowerCase();
      for (var j = 0; j < words[i].length; j++) {
        switch (words[i][j]) {
          case "a" :
            numberOfVowels++;
            break;
          case "e" :
            numberOfVowels++;
            break;
          case "i" :
            numberOfVowels++;
            break;
          case "o" :
            numberOfVowels++;
            break;
          case "u" :
            numberOfVowels++;
            break;
        }
      }
      if (numberOfVowels >= 2) {
          return true;
      }
    }
    return false;
};
anyHaveAtLeastTwoVowels(["dogs", "mermaid", "cat", "banana"]);

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
for (var i = 0; i < words.length; i++) {
      var numberOfVowels = 0;
      words[i].toLowerCase();
      for (var j = 0; j < words[i].length; j++) {
        switch (words[i][j]) {
          case "a" :
            numberOfVowels++;
            break;
          case "e" :
            numberOfVowels++;
            break;
          case "i" :
            numberOfVowels++;
            break;
          case "o" :
            numberOfVowels++;
            break;
          case "u" :
            numberOfVowels++;
            break;
        }
      }
      if (numberOfVowels >= 2) {
          return false;
      }
    }
    return true;
};
noneHaveTwoOrMoreVowels(["dogs", "mermaid", "cat", "banana"]);

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  //create object constructor?
  //for each string in array
  //assign to object.key?
  //create variable for length of each word and set to 0
  //for each character in words[i] increment counter
  //set length counter variable equal to object.key property?
  newObjectFromWords = {};
  for (var i=0; i < words.length; i++) {
    function newObjectFromWords(words[i]) {
      this.newProperty = words[i];
    }
  }
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
