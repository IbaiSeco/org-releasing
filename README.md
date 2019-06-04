# org-releasing
This Node CLI application uses command line inputs and an .env file to create new releases by tagging and versioning all selected  GitHub organization repo's.

In order to run you must change the environment variables depending on how you want to use the application.
This is the .env.example provided in the repository:

# Set the information you want to be processed here
# put a space inbetween the exact name of the repos that you want to be processed
REPOS="Testing-One Testing-Two"
# enter the organization name here
ORGANIZATION="ibais-projects"
# Enter the token below
TOKEN="***************************************"

You must run the following command to install the necessary packages:
-> npm install @octokit/request @octokit/rest dotenv inquirer request

Once installed successfully run:
-> node index.js

Once the script has completed running it will result in complete.
