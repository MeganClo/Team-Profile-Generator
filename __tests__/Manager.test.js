const Manager = require('../lib/Manager');

test("creates a new manager object", () => {
    const manager = new Manager("Megan", "m346", "megs.close@gmail.com", 415-378-2731);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual("Manager");
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager("Megan", "m346", "megs.close@gmail.com", 415-378-2731);

    expect(manager.getName()).toEqual("Megan")
});

test("gets manager's ID", () => {
    const manager = new Manager("Megan", "m346", "megs.close@gmail.com", 415-378-2731);

    expect(manager.getID()).toEqual("m346")
});

test("gets manager's email", () => {
    const manager = new Manager("Megan", "m346", "megs.close@gmail.com", 415-378-2731);

    expect(manager.getEmail()).toEqual("megs.close@gmail.com")
});

test("gets manager's role", () => {
    const manager = new Manager("Megan", "m346", "megs.close@gmail.com", 415-378-2731);

    expect(manager.getRole()).toEqual("Manager")
});