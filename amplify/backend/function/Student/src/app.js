/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_L3FULLBACKEND_COURSESUBCRIPTIONTABLE_ARN
	API_L3FULLBACKEND_COURSESUBCRIPTIONTABLE_NAME
	API_L3FULLBACKEND_COURSETABLE_ARN
	API_L3FULLBACKEND_COURSETABLE_NAME
	API_L3FULLBACKEND_EXCERCISETABLE_ARN
	API_L3FULLBACKEND_EXCERCISETABLE_NAME
	API_L3FULLBACKEND_GRAPHQLAPIENDPOINTOUTPUT
	API_L3FULLBACKEND_GRAPHQLAPIIDOUTPUT
	API_L3FULLBACKEND_NOTETABLE_ARN
	API_L3FULLBACKEND_NOTETABLE_NAME
	API_L3FULLBACKEND_ONLINECLASSROOMTABLE_ARN
	API_L3FULLBACKEND_ONLINECLASSROOMTABLE_NAME
	API_L3FULLBACKEND_PAYMENTRECORDTABLE_ARN
	API_L3FULLBACKEND_PAYMENTRECORDTABLE_NAME
	API_L3FULLBACKEND_TEACHERTABLE_ARN
	API_L3FULLBACKEND_TEACHERTABLE_NAME
	API_L3FULLBACKEND_TIMETABLETABLE_ARN
	API_L3FULLBACKEND_TIMETABLETABLE_NAME
	API_L3FULLBACKEND_USERTABLE_ARN
	API_L3FULLBACKEND_USERTABLE_NAME
	AUTH_L3FULLBACKEND_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/student', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/student/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/student', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/student/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/student', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/student/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/student', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/student/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
