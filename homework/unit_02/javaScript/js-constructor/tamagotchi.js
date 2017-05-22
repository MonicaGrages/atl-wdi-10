console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(name, creatureType) {
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.cry = function() {
    console.log(this.name+' says WAHH!!!');
  };
  this.name = name;
  this.creatureType = creatureType;
  this.puke = function () {
    this.foodInTummy --;
    console.log("food in "+this.name+"'s tummy: "+this.foodInTummy);
    this.cry;
  };
  this.yawn = function () {
    this.restedness --;
    console.log(this.name+"'s restedness is: "+this.restedness);
  };
  this.hungerTimer = function (callback, timeOut) {
    console.log('hungerTimer called'); //why doesn't this work?
    setInterval(callback, timeOut); //why doesn't this work?
  }
  this.start = function() {
    console.log('Started '+this.name);
    this.hungerTimer(this.cry, 6000); // why doesn't this work?
    // setInterval(this.cry, 6000);
    // setInterval(this.yawn, 1000);
    // setInterval(this.puke, 2000);
  };
};

//create new Tamagotchis
var fred = new Tamagotchi('Fred', 'monster');
var burney = new Tamagotchi('Burn-ey', 'dragon');
var beep = new Tamagotchi('Beep', 'robot');

//test out your Tamagotchies below via console.logs
fred.start();
