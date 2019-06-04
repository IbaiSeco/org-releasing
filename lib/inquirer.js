const inquirer = require('inquirer');

module.exports = {
    askQuestions: () => {
        const questions = [
            {
                type: 'input',
                name: 'tagVersion',
                message: 'Enter the tag version you would like to use: ',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Enter the tag version you would like to use: ';
                    }
                }
            },
            {
                type: 'input',
                name: 'releaseName',
                message: 'Enter the release name: ',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Enter the release name: '
                    }
                }

            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter the description of the release: ',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Enter the description of the release: '
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
}
