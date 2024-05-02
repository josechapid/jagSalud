const {Professional} = require('../../db');

const desactProfessionalController = async (id, value) => {
  const professional = await Professional.findOne({
    where: { id: parseInt(id, 10) },
  });
  professional.availability = value;
  const date = value === "true" ? "activado" : "desactivado";
  await professional.save();
  return { message: `Profesional ${date} exitosamente` };
};

module.exports = desactProfessionalController;