const AWS = require('aws-sdk');
AWS.config.update( {
  region: 'us-west-2'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const scanDynamoRecords = async (scanParams, itemArray) => {
    try {
        const dynamoData = await dynamodb.scan(scanParams).promise();
        itemArray = itemArray.concat(dynamoData.Items);
        if (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartkey = dynamoData.LastEvaluatedKey;
            return await scanDynamoRecords(scanParams, itemArray);
        }
        return itemArray;
    } catch(error) {
        console.log(JSON.stringify(error));
        return null;
    }
};

const insertToTable = async (tableName, itemParams) => {
    const params = {
        TableName: tableName,
        Item: itemParams
    };

    try {
        await dynamodb.put(params).promise();
        return true
    } catch (error) {
        console.log(`*** Error inserting into ${tableName}`);
        console.log(JSON.stringify(error));
    }
    return false;
};

const getAllItems = async tableName => {
    const params = {
        TableName: tableName
    }
    return scanDynamoRecords(params, []);
};

module.exports = {
    insertToTable,
    getAllItems
};