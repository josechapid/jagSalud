const { Service } = require('../../db');

const deleteServiceController = async (id) => {
  try {
    const service = await Service.findByPk(id)
    if(!service){
      console.log("Servicio no encontrado");
      throw new Error("Servicio no encontrado")
    }
    await service.destroy();

    console.log("Servicio eliminado correctamente");
    return "Servicio eliminado correctamente"
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    throw error
  }
}

module.exports = deleteServiceController