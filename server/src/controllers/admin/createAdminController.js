const { Administrator } = require('../../db.js');

const createAdminController = async ({ name, lastName, email, password }) => {
  const newAdmin = await Administrator.create({
    name,
    lastName,
    email,
    password
  });
  return newAdmin;
}

module.exports = createAdminController