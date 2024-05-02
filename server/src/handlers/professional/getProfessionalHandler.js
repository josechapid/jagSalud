const getProfessionalByNameController = require('../../controllers/professional/getProfessionalByNameController');
const getProfessionalController = require('../../controllers/professional/getProfessionalController');

const getProfessionalHandler = async (req, res) => {
    try {
       
        const {name} = req.query;
        try {
            if(name){
                const allProfessionalByName =
                  await getProfessionalByNameController(name);
                if (allProfessionalByName.length === 0) {
                  throw new Error(
                    `No se encontró ningún profesional con nombre: ${name}`
                  );
                }
                res.status(200).json(allProfessionalByName);
            }else{
                const allProfessionalDB = await getProfessionalController();
                res.status(200).json(allProfessionalDB);
            }
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getProfessionalHandler;