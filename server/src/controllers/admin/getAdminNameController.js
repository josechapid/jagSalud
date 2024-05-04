const { Administrator } = require('../../db');
const { Op } = require('sequelize');

const getAdminNameController = async (name) => {
  const response = await Administrator.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    }
  })

  return response
}

module.exports = getAdminNameController