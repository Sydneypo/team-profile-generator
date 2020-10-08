const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer (name, "1234", "jane@jane.com", '2345');

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe("1234");
    expect(engineer.email).toBe('jane@jane.com');
    expect(engineer.office).toBe('2345');
});