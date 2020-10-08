const teamManager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new teamManager('John Doe', '3829', 'john@john.com', '1938');

    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe('3829');
    expect(manager.email).toBe('john@john.com');
    expect(manager.office).toBe('1938');
});