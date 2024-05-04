const { Service } = require('../../db');
const { Op } = require('sequelize');

const getServiceNameController = async (title) => {
  const response = await Service.findAll({
    where: {
      name: {
        [Op.iLike]: `%${title}%`
      }
    }
  })

  return response
}

module.exports = getServiceNameController