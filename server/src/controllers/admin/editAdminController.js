const { Administrator } = require('../../db');

const editAdminController = async (id, {name, lastName, email, password }) => {
  const update = await Administrator.update({
    name,
    lastName,
    email,
    password
  },{
    where: {
      id: parseInt(id, 10)
    }
  })

  if(!update){
    return { message: "No se actualizaron los datos correctamente" }
  } else {
    return { message: "Administrador actualizado correctamente" }
  }
}

module.exports = editAdminController