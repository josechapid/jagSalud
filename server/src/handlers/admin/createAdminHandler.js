const createAdminController = require("../../controllers/admin/createAdminController");

const createAdminHandler = async (req, res) =>{
  try {
    //Validación de datos ingresados sean correctos
    if(!req.body || !req.body.name || !req.body.lastName || !req.body.email || !req.body.password){
      return res.status(400).json({ message: "Datos no ingresados correctamente"})
    }

    const data = req.body;
    const response = await createAdminController(data);
    res.status(200).json({ message: "Administrador creado correctamente", response});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear un administrador", error: error.message });
  }
}

module.exports = createAdminHandler