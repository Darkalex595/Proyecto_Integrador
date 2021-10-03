const AWS = require('aws-sdk');
AWS.config.update( {
  region: 'us-west-2'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tagTableName = 'tag';

const createTag = async data => {
    
  const params = {
    TableName: tagTableName,
    Item: {
      "tagName": data.tagName
    }
  }

  try {
    await dynamodb.put(params).promise();
    return 0;
  } catch (e) {
    console.log('ERROR');
    console.log(JSON.stringify(e));
    return 1;
  }
      

};

module.exports = {
  createTag
};