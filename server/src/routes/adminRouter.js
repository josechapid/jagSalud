const { Router } = require('express');
const createAdminHandler = require('../handlers/admin/createAdminHandler');
const getAdminHandler = require('../handlers/admin/getAdminHandler');
const editAdminHandler = require('../handlers/admin/editAdminHandler');
const adminRouter = Router();

//obtener todos los administradores
adminRouter.get('/', getAdminHandler);
//crear un administrador
adminRouter.post('/', createAdminHandler);
//editar un administrador
adminRouter.patch("/:id", editAdminHandler);


module.exports = adminRouter;