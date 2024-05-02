const desactProfessionalController = require('../../controllers/professional/desactProfessionalController');

const desactProfessionalHandler = async (req, res) => {
    const { id, value } = req.params;
    try {
       
        const response = await desactProfessionalController(id, value);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = desactProfessionalHandler;