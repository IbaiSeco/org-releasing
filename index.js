
const repo = require('./lib/repo');
const github = require('./lib/github');
const { envRepo, envOrg, envToken } = require('./lib/config');

const repos = envRepo;
const org = envOrg;
const token = envToken;

console.log('Welcome to the git tagger!');

const run = async () => {
    const versionTag = await github.getQuestions();
    const post = await repos.map(x => repo.getRepos(x, versionTag.tagVersion, versionTag.releaseName, versionTag.description, org, token));
    console.log('Complete.')
}
run();

