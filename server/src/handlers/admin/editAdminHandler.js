const editAdminController = require("../../controllers/admin/editAdminController");

const editAdminHandler = async (req, res) => {
  const id = req.params.id
  const data = req.body
  try {
    const response = await editAdminController(id, data);
    res.status(200).json({response})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = editAdminHandler