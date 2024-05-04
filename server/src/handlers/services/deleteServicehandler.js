const deleteServiceController = require("../../controllers/service/deleteServiceController");

const deleteServiceHandler = async (req, res) => {
  const id = req.params.id
  try {
    const response = await deleteServiceController(id);
    res.status(200).json({response})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = deleteServiceHandler