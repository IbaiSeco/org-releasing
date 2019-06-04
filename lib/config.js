//config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    envRepo: process.env.REPOS.split(' '),
    envOrg: process.env.ORGANIZATION,
    envToken: process.env.TOKEN
};