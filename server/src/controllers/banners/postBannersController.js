const {Banner} = require ("../../db")

const postBannersController = async ({title, description, image})=>{
    const newBanner = await Banner.create({
        title, 
        description,
        image
    });
    return newBanner
}

module.exports= postBannersController