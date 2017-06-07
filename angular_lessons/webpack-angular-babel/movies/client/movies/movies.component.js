let moviesTemplate = require(__dirname + '/movies.html'); //we can do this because we have webpack
let moviesController = require(__dirname + '/movies.controller.js'); //__dirname means from our current directory

let MoviesComponent = {
    template: moviesTemplate,
    controller: moviesController
};

angular.module('moviesApp').component('movies', MoviesComponent); //give it a lowercase name as a string because this is the name of the html element we are creating
