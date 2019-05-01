
const assert = require('chai').assert;
const test = require('../model/usertest')

describe('helloTest', () =>{
    it('App should return hello', ()=> {
        assert.equal(test(), 'hello');
    });
});