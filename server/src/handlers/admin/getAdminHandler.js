const getAdminController = require("../../controllers/admin/getAdminController")
const getAdminNameController = require("../../controllers/admin/getAdminNameController")

const getAdminHandler = async (req, res) => {
  const name = req.query.name
  try {
    if(!name){
      const response = await getAdminController()
      return res.status(200).json({response})
    } else {
      const response = await getAdminNameController(name)
      return res.status(200).json({response})
    }
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = getAdminHandler