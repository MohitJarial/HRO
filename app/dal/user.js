const { userModel } = require('../../models/index');

const createUser = (info) => userModel.create(info);
const updateUser = (info, id) => userModel.update(info, { where: { id } });

module.exports = { createUser, updateUser };