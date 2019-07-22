const { gql } = require("apollo-server-express");
const employeeSchema = require("./employee_schema");

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

const schemaArray = [root, employeeSchema];

module.exports = schemaArray;
