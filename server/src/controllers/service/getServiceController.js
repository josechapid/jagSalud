const { Service } = require('../../db');

const getServiceController = async () => {
  const response = await Service.findAll()
  return response
}

module.exports = getServiceController