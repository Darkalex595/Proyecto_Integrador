
const { createTag } = require('./src/tags/createTag');
const { getTag } = require("./src/tags//getTag");

const { createItem } = require("./src/items/createItem");
const { getItem } = require("./src/items/getItem");

const { createUrl } = require("./src/url/createUrl");
const { getUrl } = require("./src/url/getUrl");

const TAG = '/tags';
const ITEMS = '/items';
const URL = '/url'

exports.handler = async event => {
  
  const { requestContext, rawPath } = event;
  
  const { method } = requestContext.http;

  if (method === 'GET' && rawPath === TAG) {
    return getTag();
  }
    
  if (method === 'POST' && rawPath === TAG) {
    const { body } = event;
    return createTag(JSON.parse(body));
  }
  
  if (method === 'GET' && rawPath === ITEMS) {
    return getItem();
  }
    
  if (method === 'POST' && rawPath === ITEMS) {
    const { body } = event;
    return createItem(JSON.parse(body));
  }
  
  if (method === 'GET' && rawPath === URL) {
    return getUrl();
  }
    
  if (method === 'POST' && rawPath === URL) {
    const { body } = event;
    return createUrl(JSON.parse(body));
  }
  
   return false;
};