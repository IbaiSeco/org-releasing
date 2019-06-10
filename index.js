
const repo = require('./lib/repo');
const github = require('./lib/github');
const chalk = require('chalk');
const { envRepo, envOrg, envToken, envBranch } = require('./lib/config');

const repos = envRepo;
const org = envOrg;
const token = envToken;
const branch = envBranch;

console.log(chalk.bold('Welcome to Your Release Organizer!'));

const run = async () => {
    const funcOption = await github.getOption();
    if (funcOption.function == 'New Release') {
        const versionTag = await github.getQuestions();
        const releaseConfirm = await github.getConfirmation();
        if (releaseConfirm.confirm == 'Yes') {
            const post = await repos.map(x => repo.getRepos(x, versionTag.tagVersion, versionTag.releaseName, versionTag.description, org, branch, token));
            console.log(chalk.green('Release complete.'));
        }
        else {
            console.log(chalk.red('Release cancelled!'));
        }
    } else {
        const getRepos = await repo.forSelectRepo(org, token);
        const reposOptions = await github.getRepositories(getRepos);
        select = reposOptions.repos;
        tagChoices = await repo.getReleases(select, org, token);
        const tag = await github.getTags(tagChoices);
        ///
        const releaseConfirm = await github.getConfirmation();
        if (releaseConfirm.confirm == 'Yes') {
            const releases = await repo.getReleases(select, org, token);
            const removeTag = await repo.deleteRelease(tag.releases, select, org, token);
            console.log(chalk.green('Release deleted.'));
        }
        else {
            console.log(chalk.red('Delete cancelled!'));
        }
    }
}
run();

