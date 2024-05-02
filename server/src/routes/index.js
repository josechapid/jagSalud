const { Router } = require('express');

const router = Router();

const bannersRouter = require("./bannersRouter");
const professionalRouter = require("./professionalRouter");

// Router Professional
router.use("/professional", professionalRouter);
//Router Banners
router.use("/banners", bannersRouter);


module.exports = router;
