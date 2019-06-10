const inquirer = require('inquirer');
const repo = require('./repo');

module.exports = {
    chooseRepo: (repos) => {
        const question = [
            {
                type: 'list',
                name: 'repos',
                message: 'Which repo would you like to delete from?',
                choices: repos,
                validate: function( value ) {
                     if (value.length) {
                        return true;
                     } else {
                        return 'Which repo would you like to delete from?';
                    }
                }
            }
        ];
        return inquirer.prompt(question);
    }
}