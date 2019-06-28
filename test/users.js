
const sequelizeFixtures = require('sequelize-fixtures');
const models = require('./../models/index');
const { createUser, updateUser } = require('../app/dal/users');
const assert = require('chai').assert;
const path = require('path');



describe('User Services', () => {
    beforeEach(() =>

        sequelizeFixtures.loadFile(
            path.join(__dirname, '/fixtures/states.js'), models));

    const userInfo = {
        userName: 'mohit',
        email: 'mohit.jarial@gmail.com',
        phone: '99148040555',
    };
   
    it('Create User', async () => {
        const sId = await models.states.findAll();
        userInfo.stateId = sId[0].id;
        const response = createUser(userInfo);
        assert.ok(response);
    });

    it.only('Update User', async () => {
        const sId = await models.states.findAll();
        userInfo.stateId = sId[0].id;
    
     const retriveInfo = await createUser(userInfo);
     const updateinfo = updateUser(updateInfo, retriveInfo.id);
       // const updateinfo = updateUser({ name: 'jaspal' }, uId[0].id);
        
        assert.ok(updateinfo);
    });
});