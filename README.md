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