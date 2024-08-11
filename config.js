const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG, || "https://ibb.co/cLsCN0k",
ALIVE_MSG: process.env.ALIVE_MSG, || "Hello Im Alive Now",
};
