const { Administrator } = require('../../db');

const getAdminController = async () => {
  const response = await Administrator.findAll()
  return response
}

module.exports = getAdminController