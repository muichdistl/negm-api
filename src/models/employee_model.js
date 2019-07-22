const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    first_name: { type: String, require: true },
    last_name: { type: String, require: true }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
