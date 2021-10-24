const axios = require('axios').default;


const BASE_URL = 'https://b24pk951ad.execute-api.us-west-2.amazonaws.com/';
const ITEMS_URL = 'items';
const TAG_URL = 'tags';
const URL_URL = 'url';


const createItem = async body => {
    const url = `${BASE_URL}${ITEMS_URL}`;
    const result = await axios.post(url, body)
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    
    if (result) {
        return result.data;
    }
    return result;
};

const getItem = async () => {
    const url = `${BASE_URL}${ITEMS_URL}`;
    const result = await axios.get(url)
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    
    if (result) {
        return result.data;
    }
    return result;
};


const createTag = async body => {
    const url = `${BASE_URL}${TAG_URL}`;
    const result = await axios.post(url, body,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });

    if (result) {
        return result.data;
    }
    return result;
};

const getTag = async () => {
    const url = `${BASE_URL}${TAG_URL}`;
    const result = await axios.get(url)
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    
    if (result) {
        return result.data;
    }

    return result;
};

const createUrl = async body => {
    const url = `${BASE_URL}${URL_URL}`;
    const result = await axios.post(url, body)
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });

    if (result) {
        return result.data;
    }
    return result;
};

const getUrl = async () => {
    const url = `${BASE_URL}${URL_URL}`;
    const result = await axios.get(url)
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    
    console.log(result);
    
    if (result) {
        return result.data;
    }

    return result;
};


export {
    createItem,
    getItem,
    createTag,
    getTag,
    createUrl,
    getUrl
}