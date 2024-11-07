const express = require("express");
const router = express.Router();
const { clientApplication } = require("./client");

router.post("/setstudent",async(req,res)=>{

try{
  let universityClient = new clientApplication();
const result = await universityClient.submitTxn(
    "university",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "invokeTxn",
    "",
    "setstudent",
    
)
res.status(201).json({
      success: true,
      message: "Student details created successfully!",
      data: { result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.post("/createStudentApplication", async (req, res) => {
  try {
    const { studentId , name , scholarshipId  } = req.body;

    let userClient = new clientApplication();

    const result = await userClient.submitTxn(
    "user",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "invokeTxn",
    "",
    "createStudentApplication",
    studentId,
    name,
    scholarshipId
    );

    res.status(201).json({
      success: true,
      message: "Student Application created successfully!",
      data: { result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
});


router.post("/readstudentapplication",async(req,res)=>{

try{
   const {studentId } = req.body;
   console.log(studentId);
  let userClient = new clientApplication();
const result = await userClient.submitTxn(
    "user",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "readStudentApplication",
    studentId
    
)

const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
            const jsonObject = JSON.parse(decodedString);
            
            console.log("student Application: ")
            // Log the JSON object
            console.log(jsonObject);
res.status(201).json({
      success: true,
      message: "Student details fetched!",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.get("/viewapplications",async(req,res)=>{
  try{
    let userClient = new clientApplication();
const result = await userClient.submitTxn(
   "university",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "queryAllApplications",
)
const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
const jsonObject = JSON.parse(decodedString);
            
  console.log("student Application: ")
            // Log the JSON object
  console.log(jsonObject);
  res.status(201).json({
      success: true,
      message: "Student details fetched!",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})



router.get("/viewuniapplications",async(req,res)=>{
  try{
    let userClient = new clientApplication();
const result = await userClient.submitTxn(
   "university",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "queryAllUNIApplications",
)
const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
const jsonObject = JSON.parse(decodedString);
            
  console.log("student Application: ")
            // Log the JSON object
  console.log(jsonObject);
  res.status(201).json({
      success: true,
      message: "Student details fetched!",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.post("/approveApplication", async (req, res) => {
  try {
    const { universityId,applicationId,scholarshipId,studentId} = req.body;
    console.log(universityId,
          applicationId,
          scholarshipId,
          studentId,)

    let userClient = new clientApplication();

    const result = await userClient.submitTxn(
     "university",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "invokeTxn",
    "",
    "createUniversityApplication",
    applicationId,
    studentId,
    universityId,
    scholarshipId,
    
    );

    res.status(201).json({
      success: true,
      message: "University Application created successfully!",
      data: { result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
});


router.post("/setScholarships",async(req,res)=>{

try{
  let universityClient = new clientApplication();
const result = await universityClient.submitTxn(
    "scholarshipProvider",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "invokeTxn",
    "",
    "setScholarship"
    
)
console.log("scholarship created")
res.status(201).json({
      success: true,
      message: "Scholarship details created successfully!",
      data: { result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.get("/getScholarships",async(req,res)=>{
  try{
    let userClient = new clientApplication();
const result = await userClient.submitTxn(
    "scholarshipProvider",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "getAllScholarships"
)
const decodedString = new TextDecoder().decode(result);

const jsonObject = JSON.parse(decodedString);
            
  console.log("scholarship details: ")
      console.log("hj",decodedString);  
  console.log(jsonObject);
  res.status(201).json({
      success: true,
      message: "scholarship details fetched!",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})

router.post("/viewapplicationid",async(req,res)=>{
  try{
    const {scholarshipId} = req.body;
    console.log(scholarshipId);

    let userClient = new clientApplication();
const result = await userClient.submitTxn(
   "scholarshipProvider",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "isApplicationAssigned",
    scholarshipId
)
const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
// const jsonObject = JSON.parse(decodedString);
            
  console.log("scholarship-application details: ")
            // Log the JSON object
  console.log(decodedString);
  res.status(201).json({
      success: true,
      message: "scholarship details fetched!",
      data: { decodedString },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.post("/getApplicationDetails",async(req,res)=>{

try{
   const {applicationId } = req.body;
   console.log(applicationId);
  let userClient = new clientApplication();
const result = await userClient.submitTxn(
    "scholarshipProvider",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "readApplication",
    applicationId
    
)

const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
            const jsonObject = JSON.parse(decodedString);
            
            console.log("student Application: ")
            // Log the JSON object
            console.log(jsonObject);
res.status(201).json({
      success: true,
      message: "applicationId details fetched!",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.post("/checkStudentAllocation",async(req,res)=>{

try{
   const {applicationId,scholarshipId } = req.body;
   console.log(applicationId,scholarshipId);
  let userClient = new clientApplication();
const result = await userClient.submitTxn(
    "scholarshipProvider",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "isStudentApprovedForScholarship",
    scholarshipId,
    applicationId
    
)

const decodedString = new TextDecoder().decode(result);           
const jsonObject = JSON.parse(decodedString);
            
console.log("isStudentApprovedForScholarship ")
            
console.log(jsonObject);
res.status(201).json({
      success: true,
      message: "isStudentApprovedForScholarship",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})


router.post("/SPapproveApplication",async(req,res)=>{

try{
   const { applicationId,scholarshipId } = req.body;
   console.log("hkj");
   console.log("aa",applicationId);
   console.log("sss",scholarshipId)
  let userClient = new clientApplication();
const result = await userClient.submitTxn(
    "scholarshipProvider",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "invokeTxn",
    "",
    "approveFund",
    scholarshipId,
    applicationId
    
)

          // Decode the Uint8Array to a string
            const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
            const jsonObject = JSON.parse(decodedString);
            
            console.log(" Application details submitted by University: ")
            // Log the JSON object
            console.log(jsonObject);

res.status(201).json({
      success: true,
      message: "fund approved",
      data: { jsonObject }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})




router.get("/getSPApprovedApplications",async(req,res)=>{
  try{
    let userClient = new clientApplication();
const result = await userClient.submitTxn(
    "govAgency",
    "mychannel",
    "scholarship",
    "ScholarshipContract",
    "queryTxn",
    "",
    "queryAllSPApplications"
)
const decodedString = new TextDecoder().decode(result);

const jsonObject = JSON.parse(decodedString);
            
  console.log("scholarship details: ")
      console.log("hj",decodedString);  
  console.log(jsonObject);
  res.status(201).json({
      success: true,
      message: "scholarship details fetched!",
      data: { jsonObject },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please check the details!",
      data: { error },
    });
  }
})

module.exports = router;
