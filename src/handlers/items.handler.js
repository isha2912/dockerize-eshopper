const itemServices = require('../services/items.service');

const getItems = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const items = await itemServices.getItems();
  res.status(200).json({ data: items });
};

module.exports = { getItems };
