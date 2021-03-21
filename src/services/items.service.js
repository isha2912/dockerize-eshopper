const { Item } = require('../../models');

const getItems = (async () => {
  const items = await Item.findAll();
  //   console.log(items);
  return items;
});

module.exports = { getItems };
