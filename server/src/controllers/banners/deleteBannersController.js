const {Banner} = require ("../../db")

const deleteBannersController = async (id)=>{

const bannerPk = await Banner.findByPk(id)
if(!bannerPk) {
    throw new Error ("Banner no encontrado")
}
await bannerPk.destroy()
return {message: "Banner eliminado"}
}

module.exports = deleteBannersController