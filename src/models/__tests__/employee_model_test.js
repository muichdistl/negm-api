const mongoose = require("mongoose");
const Employee = require("../employee_model");
const testConnection = require("../../helper/test_connection");

testConnection.connect();

describe("Employee model test", () => {
  beforeAll(async () => {
    await Employee.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("has a model", () => {
    expect(Employee).toBeDefined();
  });

  describe("save employee", () => {
    it("saves a employee", async () => {
      const employee = new Employee({ first_name: "John", last_name: "Doe" });
      const savedEmployee = await employee.save();
      expect(savedEmployee.first_name).toEqual("John");
      expect(savedEmployee.last_name).toEqual("Doe");
    });
  });
});
