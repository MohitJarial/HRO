
const sequelizeFixtures = require('sequelize-fixtures');
const models = require('./../models/index');
const { createUser, updateUser} = require('../app/dal/users');
const assert = require('chai').assert;
const path = require('path');


describe('User Services', () => {
    before(() => {
        sequelizeFixtures.loadFile(
            path.join(__dirname, '/fixtures/states.json'),models)
    })
    const updateInfo = {
        userName: 'mohit',
        email : 'mohit.jarial@gmail.com',
        phone: '99148040555',
        stateId : 1
       };

    it.only('Create User', () => {
       const response = createUser(updateInfo);
       assert.ok(response);
    });

    it('Update User', async () => {
        const userInfo = await createUser(updateInfo);
          const updateinfo = updateUser(updateInfo, userInfo.id);
          assert.ok(updateinfo);
    });
    // after(() => {
    //    setTimeout(() => {
    //     models.sequelize.sync({
    //             force: true
    //         });
    //    }, 5000); 
    // })
});