

function Employee (name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    
    Employee.prototype.getName = function() {
        return `${this.name}`
    }

    Employee.prototype.getId = function() {
        return `${this.id}`
    }

    Employee.prototype.getEmail = function() {
        return `${this.email}`
    }
}




// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
//     getName() {
//         return `Name: ${this.name}`
//     }
//     getId() {
//         return `ID: ${this.id}`
//     }
//     getEmail() {
//         return `Email: ${this.email}`
//     }
//     getPosition() {
//         return `Employee`
//     }
// }

module.exports = Employee;

