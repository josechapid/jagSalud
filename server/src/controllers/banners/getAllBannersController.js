const {Banner} = require ("../../db")

const getAllBannersController= async ()=>{

    const banners= await Banner.findAll()
    return banners
}

module.exports= getAllBannersController
