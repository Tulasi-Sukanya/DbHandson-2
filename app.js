const express=require("express");
const bodyParser=require("body-parser")
const EmployeeRouter=require("./routes/employee")

const app=express();
app.use(bodyParser.json());
app.use(EmployeeRouter);

app.listen(4000,()=>{
    console.log("Server running at port 4000");
})