
const assert = require('chai').assert;
const { sum, helloWord, getSqlQuery } = require('../app/dal/usertest')

describe('helloTest', () => {
    it('App should return hello', () => {
        assert.equal(helloWord(), 'hello');
    });
});


describe('Sum value', function () {
    it('should sum value', function () {
        assert.equal(6, sum(2, 4));
    })
})

describe('Sql Query Builder', () => {
    it('should select all columns from specific table', () => {
        assert.equal('select * from users', getSqlQuery('users', [], []));
    })

    it('should select columns from specific table', () => {
        assert.equal('select name,id from users', getSqlQuery('users', ['name', 'id'], []));
    })

    it('should be able to add single where conditions', () => {
        assert.equal("select * from users where email='abc@gmail.com'",
            getSqlQuery('users', [],
                [{
                    'email': 'abc@gmail.com'
                }]
            ));
    })

    it('should be able to add multiple where conditions', () => {
        assert.equal(`select * from users where email='abc@gmail.com' and password='abc@123'`,
            getSqlQuery('users', [],
                [{
                    'email': 'abc@gmail.com'
                },
                { 'password': 'abc@123' }
                ]
            ));
    })
})
