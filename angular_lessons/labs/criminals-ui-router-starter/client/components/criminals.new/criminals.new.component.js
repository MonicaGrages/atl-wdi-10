const controller = require('./criminals.new.controller.js');
const template = require('./criminals.new.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminalsNew', component);
  //when you call this in the actual HTML element or in app.js template key-value pair it should be called <criminals-new>
