var EventEmitter = require('events').EventEmitter;

function Light(option) {

	var light = new EventEmitter();

	var test = "motti";

	light.getTest = function() {
		return test;
	}



	return light;
}

module.exports = Light;