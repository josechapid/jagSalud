const { Router } = require("express");
const professionalRouter = Router();

// import hadlers
const getProfessionalHandler = require("../handlers/professional/getProfessionalHandler");
const getProfessionalByIdHandler = require("../handlers/professional/getProfessionalByIdHandler");
const postProfessionalHandler = require("../handlers/professional/postProfessionalHandler");
const editProfessionalHandler = require("../handlers/professional/editProfessionalHandler");
const desactProfessionalHandler = require("../handlers/professional/desactProfessionalHandler");

// All professional
professionalRouter.get("/", getProfessionalHandler);
// Professional by id
professionalRouter.get("/:id", getProfessionalByIdHandler);
// Crear professional
professionalRouter.post("/", postProfessionalHandler);
// Editar professional
professionalRouter.patch("/:id", editProfessionalHandler);
// Desactivar professional
professionalRouter.put("/:id/:value", desactProfessionalHandler);


module.exports = professionalRouter;
