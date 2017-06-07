let reviewsTemplate = require(__dirname + '/reviews.html'); //we can do this because we have webpack
let reviewsController = require(__dirname + '/reviews.controller.js');

let ReviewsComponent = {
    template: reviewsTemplate,
    controller: reviewsController
};

angular.module('moviesApp').component('reviews', ReviewsComponent); //give it a lowercase name as a string because this is the name of the html element we are creating
