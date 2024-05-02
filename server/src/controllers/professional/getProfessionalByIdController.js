const {Professional} = require('../../db');

const getProfessionalByIdController = async (id) => {
    const response = await Professional.findOne({
        where: { id: id },
        });
        return response;
    
};

module.exports = getProfessionalByIdController;