const models = require('../../models');

const createUser = async (userInfo) => {
    models.user.create(userInfo);
}

const updateUser = async (userInfo, id) => {
    models.user.update(userInfo, { where: { id } });
}

module.exports = { createUser, updateUser };