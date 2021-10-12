const { getAllItems } = require('./../commons/dynamo');
const { ITEM_TABLE } = require('./../commons/constants');

const getItem = async () => {
    return getAllItems(ITEM_TABLE);
};

module.exports = {
    getItem,
}