const Octokit = require('@octokit/rest');
const octokit = new Octokit();
const { request } = require('@octokit/request');

module.exports = {
    forSelectRepo : async (org, token) => {
        const repos = await request(`GET /orgs/${org}/repos`, {
            headers: {
                authorization: `token ${token}`
            },  
        });
        return repos.data.map(x => x.name);
    },
    getRepos: async (repos, tagVer, tagName, dcrip, org, branch, token) => {
        const result = await request(`POST /repos/${org}/${repos}/releases`, {
            headers: {
                authorization: `token ${token}`
            }, 
            tag_name: tagVer,
            target_commitish: branch,
            name: tagName,
            body: dcrip,
            draft: false,
            prerelease: false
            });
        },
    getReleases: async (chosenRepo, org, token) => {
        const releases = await request(`GET /repos/${org}/${chosenRepo}/releases`, {
            headers: {
                authorization: `token ${token}`
            },
        });
        const noNull = releases.data.map(x => x.name);
        var filtered = noNull.filter(function (el) {
            return el != null;
        });
        return filtered;
    },
    deleteRelease: async (chosenRelease, repo, org, token) => {
        const releases = await request(`GET /repos/${org}/${repo}/releases`, {
            headers: {
                authorization: `token ${token}`
            },
        });
        const noNull = releases.data.map(x => x.name);
        var filtered = noNull.filter(function (el) {
            return el != null;
        });
        var count = 0;
        for (var i = 0; i < filtered.length - 1; i++) {
            if (filtered[i] == chosenRelease) { 
                break;
            }
           count++;
        }
        const ID = releases.data[count].id;
        const remove = await request(`DELETE /repos/${org}/${repo}/releases/${ID}`, {
            headers: {
                authorization: `token ${token}`
            },
        });
    },
}