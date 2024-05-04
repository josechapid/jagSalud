const { Router } = require('express');
const getServiceHandler = require('../handlers/services/getServiceHandler');
const postServiceHandler = require('../handlers/services/postServiceHandler');
const editServiceHandler = require('../handlers/services/editServiceHandler');
const deleteServiceHandler = require('../handlers/services/deleteServicehandler');
const serviceRouter = Router();

//Obtener todos los servicios
serviceRouter.get("/", getServiceHandler);
//Crear un nuevo servicio
serviceRouter.post("/", postServiceHandler);
//Editar un servicio
serviceRouter.patch("/:id", editServiceHandler);
//Eliminar un servivio
serviceRouter.delete("/:id", deleteServiceHandler);

module.exports = serviceRouter;