# Architecture and Documentation

Architecture and documentation is available [here on confluence](https://exact-software.atlassian.net/wiki/spaces/CUS/pages/3830874132/TechTalk+Leaderboard+-+Amir+s+tool) 

# TechTalks-LeaderBoard
A very simple leader board app that audience can submit their answer and the leader board show live scores

* `npm install` - install dependencies
* `npm run-script build` - build the project
* `npm start` - start the server
* Add new flag in Lambda function at the top and in the dictionary also.
* Deploy API on API Gateway
* Set stage to 'dev'
* Grab the invoke URL from the API Gateway and use it in the client app for both API endpoints.
* Deploy the client app on Amplify.
* DynamoDB table name: `TechTalks-LeaderBoard`

## TO DOs
[] Add sort key to DynamoDB. (Reason: Sorting of leaderboard score is currently clientside based in the React code but doesn't work on Safari browser on Mac.)

## Contact person(s)

@<b>Robin van Loon</b>: Reaches out to the team for TechTalk.

@<b>Alesandro Slepčević</b> : For host domain name. (See Route53 in AWS DEV hosted zones for Domain: leaderboard.exactctf.com)
