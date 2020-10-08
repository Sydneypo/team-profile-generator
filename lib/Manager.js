const Employee = require('./Employee');

function teamManager(name = '') {
    this.name = name;
    this.id = "3829";
    this.email = 'john@john.com';
    this.office = '1938';
}

module.exports = teamManager;