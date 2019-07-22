const Employee = require("../models/employee_model");

exports.list = async () => {
  try {
    return await Employee.find();
  } catch (err) {
    throw err;
  }
};

exports.details = async id => {
  try {
    return await Employee.findById(id);
  } catch (err) {
    throw err;
  }
};

exports.create = async employeeInput => {
  const employee = new Employee({
    first_name: employeeInput.first_name,
    last_name: employeeInput.last_name
  });
  try {
    return await employee.save();
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, employeeInput) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      employeeInput,
      {
        new: true,
        runValidators: true
      }
    );
    return updatedEmployee;
  } catch (err) {
    throw err;
  }
};
