const editProfessionalController = require('../../controllers/professional/editProfessionalController');

const editProfessionalHandler = async (req, res) => {
  const id = req.params;

  const dataProfessional = req.body;
  try {
    const response = await editProfessionalController(id, dataProfessional);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = editProfessionalHandler;