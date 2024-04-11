const AWS = require('aws-sdk');
const config = require('../config');

class ZemgDBReader {
    constructor() {
        this.tableName = config.aws_table_name;
        this.docClient = new AWS.DynamoDB.DocumentClient({
            accessKeyId: 'AKIA5FTY7C2T5SGVMJ76',
            secretAccessKey: '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',
            region: 'us-east-2'
        });
    }

    readTable(id_user_portfolio) {
        return new Promise((resolve, reject) => {
            // query params.
            const params = {
                TableName: this.tableName,
                KeyConditionExpression: "id_user_portfolio = :id_user_portfolio",
                ExpressionAttributeValues: {
                    ":id_user_portfolio": id_user_portfolio
                }
            };

            this.docClient.query(params, function (err, data) {
                if (err) {
                    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Query succeeded.");
                    resolve(data);
                }
            });
        });
    }
}

var dbReader = new ZemgDBReader();
dbReader.readTable(1)
    .then((data) => {
        // Access the items from the result
        const items = data.Items;
        console.log(items.Items);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
