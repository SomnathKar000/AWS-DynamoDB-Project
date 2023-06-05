const AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGIEN,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoClient;
