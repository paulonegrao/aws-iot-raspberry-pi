var AWS = require('aws-sdk');
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
AWS.config.update({region: 'us-east-1'});

const awsParamStore = require( 'aws-param-store' );

awsParamStore.getParametersByPath( '/doorSensor' )
    .then( (parameters) => {

        console.log(parameters.Value);
        return parameters;
    });