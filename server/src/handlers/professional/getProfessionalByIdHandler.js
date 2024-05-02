const getProfessionalController = require('../../controllers/professional/getProfessionalByIdController');

const getProfessionalByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getProfessionalController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getProfessionalByIdHandler;