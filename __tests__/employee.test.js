const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('John Smith', '1234', 'john@john.com');

    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('john@john.com');
});