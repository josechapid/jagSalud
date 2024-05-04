const { Service } = require('../../db');

const postServiceController = async ({title, description}) => {
  const newService = await Service.create({
    title,
    description
  });
  return newService;
}

module.exports = postServiceController