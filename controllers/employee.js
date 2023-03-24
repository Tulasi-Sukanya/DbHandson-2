const mongoClient = require("../database/connection")

// Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
const employeeEnrollment = async(req,res)=>{
    const employeeData=req.body;
    try{
        const result = await mongoClient.insertToDB(employeeData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and list all the documents
const getAllEmployeeData=async (req,res)=>{
    const queryParams=req.body;
    console.log(queryParams);
    try{
        const result=await mongoClient.findAllInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and list the employees who are having salary more than 30000
const getEmployeeData=async (req,res)=>{
    const queryParams={"salary":{$gt:'30000'}};
    console.log(queryParams);
    try{
        const result=await mongoClient.findInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and list the employees who are having experience more than 2 years.

const getExpEmployeeData=async (req,res)=>{
    const queryParams={"overallExp":{'$gt':"2"}};
    console.log(queryParams);
    try{
        const result=await mongoClient.findExpInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
const getGradEmployeeData=async (req,res)=>{
    const queryParams={"yearGrad":{'$gt':"2015"}}&&{"overallExp":{'$gt':"1"}};
    console.log(queryParams);
    try{
        const result=await mongoClient.findGradInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

const updateEmployeeData=async(req,res)=>{
    const updateData=({"salary":"30000"},{'$set':{"salary":"65000"}})
    console.log(updateData);
    const filter=updateData.filter;
    const value={$set:updateData.value}
    try{
        const result=await mongoClient.updateMany(filter,value);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}


// Delete all the documents from ""employee"" where last company is Y"

const deleteEmployeeData=async(req,res)=>{
    const condition=({"lastCompany":"Y"});
    console.log(condition);
    try{
        const result=await mongoClient.deleteInDb(condition);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

module.exports={
    employeeEnrollment,getAllEmployeeData,getEmployeeData,getExpEmployeeData,getGradEmployeeData,updateEmployeeData,deleteEmployeeData
}

