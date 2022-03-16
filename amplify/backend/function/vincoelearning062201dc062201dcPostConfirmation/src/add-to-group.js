/* eslint-disable-line */ const aws = require('aws-sdk');

exports.handler = async (event, context) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  
  try {
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(event)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
};
