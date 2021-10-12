const { insertToTable } = require('./../commons/dynamo');
const { TAG_TABLE } = require('./../commons/constants');

const createTag = async data => {
  const itemParams = {
    tagName: data.tagName
  };

  return insertToTable(TAG_TABLE, itemParams);
};

module.exports = {
  createTag
};