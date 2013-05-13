/**
 * 		Configuration File
 * 		------------------
 *
 * 		This document sets the default configuration options for the controller
 * 		the defaults are stored in memory, only saved configurations are being
 * 		saved to the configuration files.
 *
 * 
 */

var nconf = require('nconf');

nconf.use('file', {file: 'config/config.json'});

nconf.load();

// Configuration Defaults:
nconf.defaults({
	
	// Lights Array config
	Lights: {
		
	}

});

nconf.save();

module.exports = {
	preferences:   nconf,
	port:             process.env.PORT             || 8080,
  	serial:           process.env.SERIAL           || '/dev/ttyO1',
  	serial_baud:      process.env.SERIAL_BAUD      || 115200
};

