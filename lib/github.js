
const inquirer = require('./inquirer');

module.exports = {
    getQuestions: async () => {
        const versionTag = await inquirer.askQuestions();
        return versionTag;
    }
}