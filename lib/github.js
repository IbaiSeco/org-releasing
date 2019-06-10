
const func = require('./function');
const inquirer = require('./inquirer');
const tags = require('./tags');
const reposelect = require('./reposelect');
const confirmation = require('./confirmation');

module.exports = {
    getQuestions: async () => {
        const versionTag = await inquirer.askQuestions();
        return versionTag;
    },
    getOption: async () => {
        const option = await func.askFunction();
        return option;
    },
    getTags: async (tagChoices) => {
        const tag = await tags.chooseTags(tagChoices);
        return tag;
    },
    getRepositories: async (repos) => {
        const repo = await reposelect.chooseRepo(repos);
        return repo;
    },
    getConfirmation: async () => {
        const confirm = await confirmation.askConfirmation();
        return confirm;
    }
}