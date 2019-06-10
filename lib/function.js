const inquirer = require('inquirer');
const repo = require('./repo');

module.exports = {
    askFunction: () => {
        const options = [
            {
                type: 'list',
                name: 'function',
                message: 'What would you like to do?',
                choices: [ "New Release", "Delete Release" ],
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'What would you like to do?';
                    }
                }
            }, 
        ];
        return inquirer.prompt(options);
    },
}