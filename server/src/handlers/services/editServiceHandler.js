const editServiceController = require("../../controllers/service/editServiceController");

const editServiceHandler = async (req, res) => {
  const id = req.params.id
  const data = req.body
  try {
    const response = await editServiceController(id, data);
    res.status(200).json({response})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = editServiceHandler;