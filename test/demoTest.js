
const assert = require('chai').assert;
const {sum,helloWord,getSqlQuery} = require('../model/usertest')

describe('helloTest', () =>{
    it('App should return hello', ()=> {
        assert.equal(helloWord(), 'hello');
    });
});       


describe('Sum value', function() {
    it('should sum value', function() {
        assert.equal(6, sum(2, 4));
    })
 })

describe('Sql Query Builder: Select', () => {
    it('should select all columns from specific table if columns not mentioned.', () => {
        assert.equal('select * from users', getSqlQuery('users'));
    })
})


