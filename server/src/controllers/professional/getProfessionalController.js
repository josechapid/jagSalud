const {Professional} = require('../../db');

const getProfessionalController = async () => {
  
  const allProfessionals = await Professional.findAll();

  return allProfessionals;
};

module.exports = getProfessionalController;