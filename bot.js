//	Load api
const Kanel = require('./api/Kanel.js');
const client = new Kanel();

//	load important data.
client.loadEvents();
client.loadCommands();

client.login(process.env.TOKEN);