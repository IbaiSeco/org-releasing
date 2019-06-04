const Octokit = require('@octokit/rest');
const octokit = new Octokit();
const { request } = require('@octokit/request');



module.exports = {
    getRepos: async (repos, tagVer, tagName, dcrip, org, token) => {
        const result = await request(`POST /repos/${org}/${repos}/releases`, {
            headers: {
                authorization: `token ${token}`
            }, 
            tag_name: tagVer,
            target_commitish: "master",
            name: tagName,
            body: dcrip,
            draft: false,
            prerelease: false
            });
        }
}