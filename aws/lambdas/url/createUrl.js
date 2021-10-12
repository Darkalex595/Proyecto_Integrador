const { insertToTable } = require('./../commons/dynamo');
const { URL_TABLE } = require('./../commons/constants');

const createUrl = async data => {
  const itemParams = {
    urlName: data.urlName,
    vigencia: data.vigencia,
    contadores: data.contadores,
    items: data.items,
    tags: data.tags
  }

  return insertToTable(URL_TABLE, itemParams);
};

module.exports = {
  createUrl
};