const express=require("express");
const employeeController = require("../controllers/employee")

const router=express.Router();

router.post('/employee',employeeController.employeeEnrollment);
router.get("/employee",employeeController.getAllEmployeeData);
router.get("/employee",employeeController.getEmployeeData);
router.get("/employee",employeeController.getExpEmployeeData);
router.get("/employee",employeeController.getGradEmployeeData);
router.put("/employee",employeeController.updateEmployeeData);
router.delete("/employee",employeeController.deleteEmployeeData)

module.exports=router;