//	Load api
const Kanel = require('./api/Kanel.js');
const client = new Kanel();

//	load important data.
client.loadEvents();
client.loadCommands();

client.login('NTcwODUwOTI0Mzk0ODQwMDc3.XMFZ3Q.WsvrmbmvgoxarE7CR1RZsMKqrqw');