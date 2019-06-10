const inquirer = require('inquirer');

module.exports = {
    askConfirmation: () => {
        const question = [
            {
                type: 'list',
                name: 'confirm',
                message: 'Are you sure you want to complete this action?',
                choices: ['Yes', 'No'],
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