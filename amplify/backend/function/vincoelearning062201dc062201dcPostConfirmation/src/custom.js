var aws = require('aws-sdk')
var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'})

exports.handler = async (event, context) => {

    aws.config.update({region: 'us-east-1'});

    let date = new Date()

    if (event.request.userAttributes.sub) {

        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'Admin'},
                'username': {S: event.userName},
                'email': {S: event.request.userAttributes.email},
                'name': {S: event.request.userAttributes.name},
                'family_name': {S: event.request.userAttributes.family_name},
                'phone_number': {S: event.request.userAttributes.phone_number},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.SUPERADMINTABLE
        }

        try {
            await ddb.putItem(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
        context.done(null, event)

    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
};