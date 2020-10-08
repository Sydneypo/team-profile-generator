const Employee = require('./Employee');

function Engineer (name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
}

module.exports = Engineer;