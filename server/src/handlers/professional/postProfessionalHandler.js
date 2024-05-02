const postProfessionalController = require('../../controllers/professional/postProfessionalController');


const postProfessionalHandler = async (req, res) => {
  
  const professional = req.body;
  try {
    const response = await postProfessionalController(professional);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = postProfessionalHandler;