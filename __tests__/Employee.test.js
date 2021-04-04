
const Employee = require('../lib/Employee');

test("creates a new employee object", () => {
    const employee = new Employee("Megan", "m346", "megs.close@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual("Employee");
});

test("gets Employee's name", () => {
    const employee = new Employee("Megan", "m346", "megs.close@gmail.com");

    expect(employee.getName()).toEqual("Megan")
});

test("gets Employee's ID", () => {
    const employee = new Employee("Megan", "m346", "megs.close@gmail.com");

    expect(employee.getID()).toEqual("m346")
});

test("gets Employee's email", () => {
    const employee = new Employee("Megan", "m346", "megs.close@gmail.com");

    expect(employee.getEmail()).toEqual("megs.close@gmail.com")
});

test("gets Employee's role", () => {
    const employee = new Employee("Megan", "m346", "megs.close@gmail.com");

    expect(employee.getRole()).toEqual("Employee")
});

