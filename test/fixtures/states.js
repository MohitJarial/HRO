const states = require('../data/states');
module.exports = states.map(data => ({
    data,
    model: 'states',
}));