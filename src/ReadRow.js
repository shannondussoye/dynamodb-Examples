var AWS = require("aws-sdk");

AWS.config.loadFromPath('../config.json');

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Movies",
    Key:{
        "year": 2013,
        "title": "100 Degrees Below Zero"
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});