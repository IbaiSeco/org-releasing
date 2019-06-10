const inquirer = require('inquirer');
const repo = require('./repo');

module.exports = {
    chooseTags: (tagChoices) => {
        const question = [
            {
                type: 'list',
                name: 'releases',
                message: 'Which release would you like to delete?',
                choices: tagChoices,
                validate: function( value ) {
                     if (value.length) {
                        return true;
                     } else {
                        return 'What would you like to do?';
                    }
                }
            }
        ];
        return inquirer.prompt(question);
    }
}