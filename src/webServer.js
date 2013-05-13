var CONFIG = require('./lib/config.js'),
	express = require('express'), 
	app = express();

	app.listen(CONFIG.port);

console.log('starting...');


app.use(express.static(__dirname + '/public'));

console.log('started');