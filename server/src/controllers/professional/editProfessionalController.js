const { Professional} = require('../../db');


const editProfessionalController = async ({ id },{ name, lastName, image, availability, turn}) => {
  const professionalDb = await Professional.findOne({
    where: { id: parseInt(id, 10) },
  });
  
  if (professionalDb) {
    const updateData = {
      name,
      lastName,
      image,
      availability,
      turn,
    };

    const editProfessional = await Professional.update(updateData, {
      where: {
        id: parseInt(id, 10), 
      },
    });

    if (editProfessional) {
      return { message: "El profesional se actualizo exitosamente" };
    } else {
      return { message: "No se realizaron los cambios solicitados" };
    }
  } else {
    return { message: "Prfoseional no encontrado" };
  }
};

module.exports = editProfessionalController;