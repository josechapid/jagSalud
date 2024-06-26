const { Router } = require("express");
const bannersRouter = Router();

const getBannersHandler = require("../handlers/banners/getAllBannersHandler");
const postBannersHandler = require("../handlers/banners/postBannersHandler");
const patchBannersHandler = require("../handlers/banners/patchBannersHandler");
const deleteBannersHandler = require("../handlers/banners/deleteBannersHandler");
const getBannersByIdHandler = require("../handlers/banners/getBannersByIdHandler");



//obtner todos los banners
bannersRouter.get("/", getBannersHandler);
//obtener banners por Id
bannersRouter.get("/:id", getBannersByIdHandler);
//crear un banner
bannersRouter.post("/", postBannersHandler);
//editar banners
bannersRouter.patch("/:id", patchBannersHandler);
// eliminar un banner
bannersRouter.delete("/:id", deleteBannersHandler);

module.exports = bannersRouter;
