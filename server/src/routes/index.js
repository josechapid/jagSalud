const { Router } = require('express');

const router = Router();

const bannersRouter = require("./bannersRouter");
const professionalRouter = require("./professionalRouter");
const adminRouter = require('./adminRouter');
const serviceRouter = require('./serviceRouter');

// Router Professional
router.use("/professional", professionalRouter);
//Router Banners
router.use("/banners", bannersRouter);
//Router Admin
router.use("/admin", adminRouter);
//Router Service
router.use("/service", serviceRouter);


module.exports = router;
