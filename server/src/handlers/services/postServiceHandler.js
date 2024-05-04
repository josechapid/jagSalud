const postServiceController = require("../../controllers/service/postServiceController");

const postServiceHandler = async (req, res) => {
  try {
    //Validación de datos ingresados sean correctos
    if(!req.body || !req.body.title || !req.body.description){
      return res.status(400).json({ message: "Datos no ingresados correctamente"})
    }

    const data = req.body;
    const response = await postServiceController(data);
    res.status(200).json({ message: "Servicio creado correctamente", response});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear un servicio", error: error.message });
  }
}

module.exports = postServiceHandler