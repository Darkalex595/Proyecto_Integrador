const { insertToTable } = require('./../commons/dynamo');
const { ITEM_TABLE } = require('./../commons/constants');

const createItem = async data => {
  const itemParams = {
    titulo: data.titulo,
    fecha: data.fecha,
    descripcion: data.descripcion,
    magenCard: data.imagenCard,
    nombreLink: data.nombreLink,
    url: data.url,
    descripcionLink: data.descripcionLink,
    infoAtributo: data.infoAtributo,
    info: data.info,
    tags: data.tags
  };

  return insertToTable(ITEM_TABLE, itemParams);
};

module.exports = {
  createItem
};