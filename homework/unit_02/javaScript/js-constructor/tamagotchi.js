console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi() {
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.cry = function() {
    this.foodInTummy --;
    console.log('food in tummy: '+this.foodInTummy);
    console.log('WAHH!!!');
  }
}

//create new Tamagotchis
var tamagotchi1 = new Tamagotchi();
var tamagotchi2 = new Tamagotchi();

//test out your Tamagotchies below via console.logs
tamagotchi1.cry();
