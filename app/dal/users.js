const models = require('../../models');

const createUser = userInfo =>  models.users.create(userInfo);

const updateUser =  (userInfo, id) => {
    models.users.update(userInfo, { where: { id } });
}

module.exports = { createUser, updateUser };