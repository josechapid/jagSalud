const { Banner } = require("../../db");

const getBannersByIdController = async (id) => {
  const bannerIdDb = await Banner.findByPk(id);
  return bannerIdDb;
};

module.exports = getBannersByIdController;
