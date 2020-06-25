const bc = require('../src');
const config = require('./config.js');

const store = bc(config);
store.StoreInfoApi.getStore()
  .then(storeInfo => console.log(storeInfo))
  .catch(error => console.log(error));
