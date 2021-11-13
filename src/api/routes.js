const ITEMS_URL = 'items';
const TAG_URL = 'tags';
const URL_URL = 'url';


const createItem = newItem => {
  console.log(newItem);

  let allItems = getItems();
  allItems.items.push(newItem);

  const { tags } = newItem;
  const allTags = getTags();

  tags.forEach(newtag => {
    if (!allTags.tags.includes(newtag)) {
      createTag(newtag);
    }
  });
  localStorage.setItem(ITEMS_URL, JSON.stringify(allItems));
  return true;
};

const getItems = () => {
  let allItems = localStorage.getItem(ITEMS_URL);
  console.log('hey')
  console.log(allItems);
  if (!allItems) {
    allItems = {
      items: []
    };
  } else {
    allItems = JSON.parse(allItems);
  }
  return allItems;
};

const createTag = newTag => {
  let allTags = getTags();
  allTags.tags.push(newTag);

  localStorage.setItem(TAG_URL, JSON.stringify(allTags));
  return true;
};

const getTags = () => {
  let allTags = localStorage.getItem(TAG_URL);
  if (!allTags) {
    allTags = {
      tags: []
    };
  } else {
    allTags = JSON.parse(allTags);
  }
  return allTags;
};

const createUrl = newUrl => {
  let allUrls = getUrls();
  allUrls.urls.push(newUrl);

  localStorage.setItem(URL_URL, JSON.stringify(allUrls));
  return true;
};

const getUrls = () => {
  let allUrls = localStorage.getItem(URL_URL);
  if (!allUrls) {
    allUrls = {
      urls: []
    };
  } else {
    allUrls = JSON.parse(allUrls);
  }
  return allUrls;
};


export {
  createItem,
  getItems,
  createTag,
  getTags,
  createUrl,
  getUrls
}