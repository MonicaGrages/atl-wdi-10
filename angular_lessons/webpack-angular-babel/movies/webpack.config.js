// require('webpack'); //this is a front end tool that we are requiring just like we do back end tools
// var glob = require('glob');

// module.exports = {
//     context: __dirname, //the root directory of our project
//     entry: {
//         app: glob.sync(__dirname + '/public/js/**/*.js') //use the glob tool to include ALL .js files in named directory and any subdirectories (**). we can use for not just js (html and css too)
//     },
//     output: {
//         path: __dirname + '/public/js', //where to put our bundle file
//         filename: '[name].bundle.js' //and what to call it - [name] refers to the key 'app:' on line 7 here. could also be factory.bundle, controller.bundle, etc.
//     }
// };

//https://github.com/ATL-WDI-Curriculum/atl-wdi-9/blob/master/angular_lessons/webpack-angular-babel/webpack-angular-babel.md




//we changed to exporting the client folder instead of the public folder. keep the bundle file outside of what you export otherwise it keeps adding itself over and over
require('webpack');
var glob = require('glob');

module.exports = {
    context: __dirname,
    entry: {
        app: glob.sync(__dirname + '/client/**/*.js')
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};
