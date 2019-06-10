# org-releasing
## About
This Node CLI application uses command line inputs and a `.env` file to create new releases by tagging and versioning all selected  GitHub organization repo's.

This application also has the ability to delete release tags. Just select `Delete Release` when asked `What would you like to do?`

In order to run you must change the environment variables depending on how you want to use the application.
This is the `.env.example` provided in the repository:

## How to Implement Environment Variables

Set the information you want to be processed below, put a space inbetween the exact name of the repos that you want to be processed:

```
REPOS="Testing-One Testing-Two"
enter the organization name here:
ORGANIZATION="ibais-projects"
Enter the token here:
TOKEN="***************************************"
```

## Running it
You must run the following command to install the necessary packages:
```
$ npm install @octokit/request @octokit/rest dotenv inquirer request chalk
```

Then edit the .env file with the correct information. See *How to Implement Environment Variables* for help.

Once the packages are installed successfully and the `.env` is edited properly run:
```
$ node index.js
```

You will be prompted with what action you would like to complete, `Delete Release` or `New Release`. You can then select one and follow the associated questions to complete the desired function.

#### Delete Release Function

If delete function is selected: you will be prompted with a list of repos from the organization. You must select one repo. The app then fetches the active tags in the repo and you can select one to delete.

Once the script has completed deleted the release in the selected repo it will result in:
```
$ Release deleted.
```
or 
```
$ Delete cancelled
```

If the action has been cancelled using the confirmation step.

#### New Release Fucntion

If new release function is selected: you will be prompted to enter the information necessary to be tagged among all of the repos in the organization that you have selected and entered into the `.env` file.

Once the script has looped through and released a new release onto all of the repos in the `.env` it will return:
```
$ Release complete.
```
or
```
$ Release cancelled.
```

If the action has been cancelled using the confirmation step.
