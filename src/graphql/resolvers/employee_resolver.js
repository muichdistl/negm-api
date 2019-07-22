const employeeService = require("../../services/employee_service");

module.exports = {
  Query: {
    employees: async () => {
      return employeeService.list();
    },
    employee: async (_, args) => {
      return employeeService.details(args.id);
    }
  },
  Mutation: {
    updateEmployee: async (_, args) => {
      return employeeService.update(args.id, args.employeeInput);
    },
    createEmployee: async (_, args) => {
      return employeeService.create(args.employeeInput);
    }
  }
};
