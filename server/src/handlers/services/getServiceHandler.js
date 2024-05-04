const getServiceController = require("../../controllers/service/getServiceController");
const getServiceNameController = require("../../controllers/service/getServiceNameController");

const getServiceHandler = async (req, res) => {
  const title = req.query.name;
  try {
    if(!title){
      const response = await getServiceController()
      return res.json({response})
    }else{
      const response = await getServiceNameController(title);
      return res.json({response})
    }
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = getServiceHandler