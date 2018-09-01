var AWS = require("aws-sdk");

AWS.config.loadFromPath('../config.json');

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Inserting movie into DynamoDB. Please wait.");

    var params = {
        TableName: "Movies",
        Item: {
            "year":  2015,
            "title": "The Big New Movie",
            "info":  {
                "plot": "Nothing happens at all.",
                "rating": 0
            }
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add movie. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded");
        }
    });
