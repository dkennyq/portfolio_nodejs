const AWS = require('aws-sdk');

class ZemDBReader {
    constructor() {
        this.tableName = 'zem_user_portfolio';
    }

    getPortfolioById(id_user_portfolio) {
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

    getPortfolios() {
        return new Promise((resolve, reject) => {
            // query params.
            const params = {
                TableName: this.tableName
            };

            this.docClient.scan(params, function (err, data) {
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

module.exports = ZemDBReader;