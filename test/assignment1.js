
const assert = require('chai').assert;
const { sqlQueryBuilder } = require('../model/assignment1Model')


describe('Assignment 1: Product', () => {

    it('should select multiple column from product table', () => {
        assert.equal(`select * from products where email='abc@gmail.com' and password='abc@123'`,
            sqlQueryBuilder('products', [],
                [{
                    'email': 'abc@gmail.com'
                },
                { 'password': 'abc@123' }
                ]
            ));
    })

    it('Generate a select query to select specific columns from a table, with order by on a column', () => {
        assert.equal('select id,name from products order by id desc',
            sqlQueryBuilder(
                'products',
                ['id', 'name'],
                [],
                [
                    { 'id': '1' }
                ],
                [
                  'desc'
                ],
            ));
    })

    it('Generate a select query to select all columns from table with order by multiple columns', () => {
        assert.equal('select * from products order by name, category',
            sqlQueryBuilder(
                'products',
                [],
                [],
                [
                    { 'name': 'samsung' },
                    { 'category': 'mobile' },
                ]
            ));
    })
})
