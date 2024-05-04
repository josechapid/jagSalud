const { Service } = require('../../db');

const editServiceController = async (id, { title, description }) => {
  const update = await Service.update({
    title,
    description
  },{
    where: {
      id: parseInt(id, 10)
    }
  })

  if(!update){
    return { message: "No se actualizaron los datos correctamente" }
  } else {
    return { message: "Servicio actualizado correctamente" }
  }
}

module.exports = editServiceController