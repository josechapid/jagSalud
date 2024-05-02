const { Professional} = require("../../db");

const postProfessionalController = async ({
  name,
  lastName,
  image,
  availability,
  turn
}) => {
  const newProfessional = await Professional.create({
    name,
    lastName,
    image,
    availability,
    turn,
  });

  return newProfessional;
};

module.exports = postProfessionalController;
