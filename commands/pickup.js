const Discord = require('discord.js');
const config = require('../config.json');
const fs = require('fs');

module.exports = {
	name: 'pickup',
	aliases: ['pick', 'joke', 'up', 'p'],
	description: 'Give you a pickup line',
	usage: `${config.prefix}pickup`,
	example: `${config.prefix}pickup`,
	cooldown: 3,
	updateable: true,
	permLevel: 'everyone',
	execute(client, message, args) {
        fs.readFile('./Pickup_lines.txt', function(error, buffer) {
            if(error) console.log(error);
            else {
				const list = buffer.toString().split('\n').map(x => x.trim());
				const line = list[Math.floor(Math.random() * list.length)]
                message.channel.send(line.charAt(0).toUpperCase() + line.slice(1).toLowerCase());
            }
        });
    },
}