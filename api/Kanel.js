const Discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs');
//	Extends class, better structure.
module.exports = class Kana extends Discord.Client {
	constructor(option) {
		super(option);
		this.defaultSettings = config;
	}
	loadCommands() {
		return require('../modules/commands.js')(this);
	}
	loadEvents() {
		return require('../modules/events.js')(this);
	}
};