const { getAllItems } = require('./../commons/dynamo');
const { URL_TABLE } = require('./../commons/constants');

const getUrl = async () => {
  return getAllItems(URL_TABLE);
};

module.exports = {
  getUrl,
}