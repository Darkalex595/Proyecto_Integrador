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

const getUrl = async () => {
    const params = {
      TableName: 'url'
    }
    const allProducts = await scanDynamoRecords(params, []);
    return allProducts
};

module.exports = {
    getUrl,
}