const Intern = require('../lib/Intern');

test("creates a new intern object", () => {
    const intern = new Intern("Megan", "m346", "megs.close@gmail.com", "Berkeley");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual("Intern");
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern("Megan", "m346", "megs.close@gmail.com", "Berkeley");

    expect(intern.getName()).toEqual("Megan")
});

test("gets intern's ID", () => {
    const intern = new Intern("Megan", "m346", "megs.close@gmail.com", "Berkeley");

    expect(intern.getID()).toEqual("m346")
});

test("gets intern's email", () => {
    const intern = new Intern("Megan", "m346", "megs.close@gmail.com", "Berkeley");

    expect(intern.getEmail()).toEqual("megs.close@gmail.com")
});

test("gets intern's role", () => {
    const intern = new Intern("Megan", "m346", "megs.close@gmail.com", "Berkeley");

    expect(intern.getRole()).toEqual("Intern")
});

test("gets intern's school", () => {
    const intern = new Intern("Megan", "m346", "megs.close@gmail.com", "Berkeley");

    expect(intern.getSchool()).toEqual("Berkeley")
});