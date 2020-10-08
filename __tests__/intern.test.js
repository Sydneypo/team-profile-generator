const teamIntern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new teamIntern('Intern', '0000', 'new@intern.com', 'College');
    
    expect(intern.name).toBe('Intern');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('new@intern.com');
    expect(intern.school).toBe('College');
});