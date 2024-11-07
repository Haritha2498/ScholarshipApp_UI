// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function ApplicationDetails() {
//   const { id } = useParams(); // Get ID from URL
//   const [application, setApplication] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchApplicationDetails = async () => {
//       try {
//         console.log(id);
//         const applicationId=id;
//         const response = await fetch("/api/getApplicationDetails", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             applicationId,
//           }),
//         });
//         console.log("khhjdas")
//         const data = await response.json();
//         console.log(data.data.jsonObject)
//         if (response.ok) {
//           setApplication(data.data.jsonObject);
//           console.log(application)
//         } else {
//           setError(data.message || "Failed to fetch application details");
//         }
//       } catch (error) {
//         setError("An error occurred... Please try again.");
//       }
//     };

//     fetchApplicationDetails();
//   }, []);

//   if (error) {
//     return <div className="text-red-500 p-4">{error}</div>;
//   }

//   if (!application) {
//     return <div className="p-4">Loading application details...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Application Details (ID: {id})
//       </h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <p>
//           <strong>studentID:</strong> {application.studentId}
//         </p>
//         <p>
//           <strong>universityID:</strong> {application.universityId}
//         </p>
//         <p>
//           <strong>student GPA:</strong> {application.gpa}
//         </p>
//         <p>
//           <strong>student course:</strong> {application.course}
//         </p>
//         <p>
//           <strong>Scholarship ID:</strong> {application.scholarshipId}
//         </p>
//         <p>
//           <strong>Status:</strong> {application.status}
//         </p>
//         {/* Add more fields as needed */}
//       </div>
//     </div>
//   );
// }

// export default ApplicationDetails;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Placeholder function to simulate fetching application details from an API
const fetchApplicationDetails = async (applicationId) => {
  // const response = await fetch(`/api/getApplicationDetails/${applicationId}`);
  const response = await fetch("/api/getApplicationDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            applicationId,
          }),
        });
  if (!response.ok) {
    throw new Error("Failed to fetch application details");
  }
  return response.json();
};

// Placeholder function to check if the student is already allocated for the scholarship
const checkStudentAllocation = async (applicationId, scholarshipId) => {
  const response = await fetch("/api/checkStudentAllocation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ applicationId, scholarshipId }),
  });
  if (!response.ok) {
    throw new Error("Failed to check student allocation");
  }
  return response.json(); // This should return { allocated: true } or { allocated: false }
};

// Placeholder function to approve the application
const approveApplication = async (applicationId, scholarshipId) => {
  console.log("aa", applicationId);
  console.log("sss", scholarshipId);
  const response = await fetch("/api/SPapproveApplication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ applicationId, scholarshipId }),
  });
  console.log(response)
  if (!response.ok) {
    throw new Error("Failed to approve application");
  }
  return response.json(); // Success response or message
};

function ApplicationDetails() {
  const { id } = useParams(); // application ID from URL
  const [application, setApplication] = useState(null);
  const [eligibility, setEligibility] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const loadApplicationDetails = async () => {
      try {
        const data = await fetchApplicationDetails(id);
        setApplication(data.data.jsonObject);
      } catch (error) {
        setStatusMessage("Failed to load application details.");
      }
    };

    loadApplicationDetails();
  }, [id]);

  // Function to handle checking student allocation
  const handleCheckEligibility = async () => {
    if (!application) return;

    try {
      const  scholarshipId = application.scholarshipId;
      const allocationResult = await checkStudentAllocation(id, scholarshipId);
      setEligibility(allocationResult.allocated ? "Not Eligible" : " Eligible");
    } catch (error) {
      setStatusMessage("Error checking student eligibility.");
    }
  };

  // Function to handle application approval
  const handleApproveApplication = async () => {
    try {
       const scholarshipId = application.scholarshipId;
      await approveApplication(id, scholarshipId);
      setStatusMessage("Application approved successfully.");
    } catch (error) {
      setStatusMessage("Failed to approve application.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Application Details id:{id}
      </h1>

      {statusMessage && (
        <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
          {statusMessage}
        </div>
      )}

      {application ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>
          <strong>studentID:</strong> {application.studentId}
      </p>
        <p>
          <strong>universityID:</strong> {application.universityId}
      </p>
        <p>
          <strong>student GPA:</strong> {application.gpa}
        </p>
        <p>
          <strong>student course:</strong> {application.course}
        </p>
        <p>
        <strong>Scholarship ID:</strong> {application.scholarshipId}
        </p>
        <p>
          <strong>Status:</strong> {application.status}
        </p>

          {eligibility !== null && (
            <p className="mt-4">
              <strong>Student Eligibility:</strong> {eligibility}
            </p>
          )}

          {/* Check Eligibility Button */}
          <button
            onClick={handleCheckEligibility}
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Check Eligibility
          </button>

          {/* Approve Application Button */}
          <button
            onClick={handleApproveApplication}
            className="ml-4 mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
          >
            Approve Application
          </button>
        </div>
      ) : (
        <p>Loading application details...</p>
      )}
    </div>
  );
}

export default ApplicationDetails;
