const {Professional} = require('../../db');
const { Op } = require('sequelize');

const getProfessionalByNameController = async (name) => {

    // por nombre
    const allProfessionalByName = await Professional.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    // por apellido
    const allProfessionalByLastname = await Professional.findAll({
      where: {
        lastName: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return [...allProfessionalByName, ...allProfessionalByLastname];
}

module.exports = getProfessionalByNameController;