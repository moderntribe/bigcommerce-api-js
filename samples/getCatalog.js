const bc = require('../src');
const config = require('./config.js');

const store = bc(config);
const getCatalog = async () => {
  const catalog = await store.CatalogApi.getCategories();
  console.log(catalog);
}

getCatalog();
