const { getAllItems } = require('./../commons/dynamo');
const { TAG_TABLE } = require('./../commons/constants');

const getTag = async () => {
  return getAllItems(TAG_TABLE);
};

module.exports = {
  getTag,
}