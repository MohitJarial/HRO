const models = require('../../models');

const createUser = async (userInfo) => {
    models.users.create(userInfo);
}

const updateUser = async (userInfo, id) => {
    models.users.update(userInfo, { where: { id } });
}

module.exports = { createUser, updateUser };