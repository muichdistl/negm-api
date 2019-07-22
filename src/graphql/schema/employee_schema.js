const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
  }

  extend type Query {
    employees: [Employee!]
    employee(id: ID!): Employee
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
  }

  extend type Mutation {
    createEmployee(employeeInput: EmployeeInput): Employee!
    updateEmployee(id: ID!, employeeInput: EmployeeInput): Employee!
  }
`;

module.exports = typeDefs;
