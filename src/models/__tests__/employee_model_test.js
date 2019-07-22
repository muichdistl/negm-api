const mongoose = require("mongoose");
const winston = require("../../config/winston");
const Employee = require("../employee_model");
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB_TEST, { useNewUrlParser: true }, () => {
  winston.info(`Connected to test database ${process.env.MONGO_DB_TEST}!`);
});

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
