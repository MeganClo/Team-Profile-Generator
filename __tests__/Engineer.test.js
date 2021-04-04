const Engineer = require('../lib/Engineer');

test("creates a new engineer object", () => {
    const engineer = new Engineer("Megan", "m346", "megs.close@gmail.com", "MeganClo");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual("Engineer");
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
    const engineer = new Engineer("Megan", "m346", "megs.close@gmail.com", "MeganClo");

    expect(engineer.getName()).toEqual("Megan")
});

test("gets engineer's ID", () => {
    const engineer = new Engineer("Megan", "m346", "megs.close@gmail.com", "MeganClo");

    expect(engineer.getID()).toEqual("m346")
});

test("gets engineer's email", () => {
    const engineer = new Engineer("Megan", "m346", "megs.close@gmail.com", "MeganClo");

    expect(engineer.getEmail()).toEqual("megs.close@gmail.com")
});

test("gets engineer's role", () => {
    const engineer = new Engineer("Megan", "m346", "megs.close@gmail.com", "MeganClo");

    expect(engineer.getRole()).toEqual("Engineer")
});

test("gets engineer's github", () => {
    const engineer = new Engineer("Megan", "m346", "megs.close@gmail.com", "MeganClo");

    expect(engineer.getGithub()).toEqual("MeganClo")
});