const AWS = require('aws-sdk');
AWS.config.update( {
  region: 'us-west-2'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tagTableName = 'item';

const createItem = async data => {
    
  const params = {
    TableName: tagTableName,
    Item: {
      "titulo": data.titulo,
      "fecha": data.fecha,
      "descripcion": data.descripcion,
      "imagenCard": data.imagenCard,
      "nombreLink": data.nombreLink,
      "url": data.url,
      "descripcionLink": data.descripcionLink,
      "infoAtributo": data.infoAtributo,
      "info": data.info,
      "tags": data.tags
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
  createItem
};