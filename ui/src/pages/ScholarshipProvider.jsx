

// import React, { useState ,Link} from "react";
// import { useNavigate } from "react-router-dom"; // For navigating to another page

// // Placeholder function to set scholarships via API
// const setScholarships = async () => {
//   const response = await fetch("/api/setScholarships", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ init: true }), // Adjust request body as needed
//   });

//   if (!response.ok) {
//     throw new Error("Failed to set scholarships");
//   }

//   return response.json(); // Success message or data
// };

// // Placeholder function to fetch scholarships from an API
// const fetchScholarships = async () => {
//   const response = await fetch("/api/getScholarships", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch scholarships");
//   }

//   return response.json();
// };

// function ScholarshipProvider() {
//   const [statusMessage, setStatusMessage] = useState("");
//   const [scholarships, setScholarshipsList] = useState([]);
//   const [statusResult, setStatusResult] = useState("");
//   const navigate = useNavigate();

//   // Function to initialize scholarships (set and then fetch)
//   const initializeScholarships = async () => {
//     try {
//       await setScholarships(); // Set scholarships on the server
//       const scholarshipData = await fetchScholarships();
//       if (scholarshipData.success) {
//         setScholarshipsList(scholarshipData.data.jsonObject); // Store scholarships data
//       }
//       setStatusMessage("Scholarship details initialized successfully.");
//     } catch (error) {
//       setStatusMessage("Failed to initialize Scholarship details.");
//     }
//   };

//   // Function to fetch scholarships without setting them
//   const loadScholarships = async () => {
//     try {
//       const scholarshipData = await fetchScholarships();
//       if (scholarshipData.success) {
//         setScholarshipsList(scholarshipData.data.jsonObject);
//         setStatusMessage("Scholarship details loaded successfully.");
//       }
//     } catch (error) {
//       setStatusMessage("Failed to load scholarship details.");
//     }
//   };

//   // Function to navigate to the approval page
//   const approveApplication = () => {
//     navigate("/approve-application"); // Update with the correct path
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Scholarship Provider Dashboard
//       </h1>

//       {statusMessage && (
//         <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
//           {statusMessage}
//         </div>
//       )}

//       <div className="mb-8 space-x-4">
//         <button
//           onClick={initializeScholarships}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
//         >
//           Initialize Scholarships
//         </button>
//         <button
//           onClick={loadScholarships}
//           className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
//         >
//           Load Scholarships
//         </button>
//         {/* <Link to="/"> */}
//           <button
//             onClick={approveApplication}
//             className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
//           >
//             Approve Application
//           </button>
//         {/* </Link> */}
//       </div>

//       {/* Scholarships Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//         {scholarships.length > 0 ? (
//           <table className="min-w-full text-left">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2">Scholarship ID</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Granted Students</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scholarships.map((scholarship) => (
//                 <tr key={scholarship.scholarshipId} className="border-b">
//                   <td className="px-4 py-2">{scholarship.scholarshipId}</td>
//                   <td className="px-4 py-2">{scholarship.amount}</td>
//                   <td className="px-4 py-2">
//                     <ul className="list-disc ml-4">
//                       {scholarship.students.length > 0 ? (
//                         scholarship.students.map((student, index) => (
//                           <li key={index}>
//                             {student.name} (ID: {student.studentId})
//                           </li>
//                         ))
//                       ) : (
//                         <li>No students granted yet</li>
//                       )}
//                     </ul>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="p-4 text-gray-600">
//             No scholarships available. Click "Load Scholarships" or "Initialize
//             Scholarships" to load data.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ScholarshipProvider;











// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For navigating to another page

// // Placeholder function to fetch scholarships from an API
// const fetchScholarships = async () => {
//   const response = await fetch("/api/getScholarships", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch scholarships");
//   }

//   return response.json();
// };

// function ScholarshipProvider() {
//   const [statusMessage, setStatusMessage] = useState("");
//   const [scholarships, setScholarshipsList] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//   const [applicationId, setApplicationId] = useState(""); // State for application ID input
//   const navigate = useNavigate();

//   // Function to fetch scholarships
//   const loadScholarships = async () => {
//     try {
//       const scholarshipData = await fetchScholarships();
//       if (scholarshipData.success) {
//         setScholarshipsList(scholarshipData.data.jsonObject);
//         setStatusMessage("Scholarship details loaded successfully.");
//       }
//     } catch (error) {
//       setStatusMessage("Failed to load scholarship details.");
//     }
//   };

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setApplicationId(""); // Clear input field when closing
//   };

//   // Handle submission of application ID from the modal
//   const submitApplicationId = () => {
//     if (applicationId) {
//       closeModal();
//       navigate(`/approveapplication/${applicationId}`); // Navigate with application ID in URL
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Scholarship Provider Dashboard
//       </h1>

//       {statusMessage && (
//         <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
//           {statusMessage}
//         </div>
//       )}

//       <div className="mb-8 space-x-4">
//         <button
//           onClick={loadScholarships}
//           className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
//         >
//           Load Scholarships
//         </button>
//         <button
//           onClick={openModal} // Open the modal on click
//           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
//         >
//           Approve Application
//         </button>
//       </div>

//       {/* Scholarships Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//         {scholarships.length > 0 ? (
//           <table className="min-w-full text-left">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2">Scholarship ID</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Granted Students</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scholarships.map((scholarship) => (
//                 <tr key={scholarship.scholarshipId} className="border-b">
//                   <td className="px-4 py-2">{scholarship.scholarshipId}</td>
//                   <td className="px-4 py-2">{scholarship.amount}</td>
//                   <td className="px-4 py-2">
//                     <ul className="list-disc ml-4">
//                       {scholarship.students.length > 0 ? (
//                         scholarship.students.map((student, index) => (
//                           <li key={index}>
//                             {student.name} (ID: {student.studentId})
//                           </li>
//                         ))
//                       ) : (
//                         <li>No students granted yet</li>
//                       )}
//                     </ul>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="p-4 text-gray-600">
//             No scholarships available. Click "Load Scholarships" to load data.
//           </div>
//         )}
//       </div>

//       {/* Modal for entering application ID */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Enter Application ID</h2>
//             <input
//               type="text"
//               value={applicationId}
//               onChange={(e) => setApplicationId(e.target.value)}
//               placeholder="Application ID"
//               className="px-4 py-2 border rounded-lg mb-4 w-full"
//             />
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={submitApplicationId}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ScholarshipProvider;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Placeholder function to simulate setting scholarships via API
// const setScholarships = async () => {
//   const response = await fetch("/api/setScholarships", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ init: true }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to set scholarships");
//   }

//   return response.json();
// };

// // Placeholder function to simulate fetching scholarships from an API
// const fetchScholarships = async () => {
//   const response = await fetch("/api/getScholarships", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch scholarships");
//   }

//   return response.json();
// };

// function ScholarshipProvider() {
//   const [statusMessage, setStatusMessage] = useState("");
//   const [scholarships, setScholarshipsList] = useState([]);
//   const [statusResult, setStatusResult] = useState("");
//   const navigate = useNavigate();

//   // Initialize scholarships: set scholarships on the server and then fetch them
//   const initializeScholarships = async () => {
//     try {
//       await setScholarships();
//       const scholarshipData = await fetchScholarships();
//       if (scholarshipData.success) {
//         setScholarshipsList(scholarshipData.data.jsonObject);
//       }
//       setStatusMessage("Scholarship details initialized successfully.");
//     } catch (error) {
//       setStatusMessage("Failed to initialize Scholarship details.");
//     }
//   };

//   // Fetch scholarships without setting them
//   const fetchOnlyScholarships = async () => {
//     try {
//       const scholarshipData = await fetchScholarships();
//       if (scholarshipData.success) {
//         setScholarshipsList(scholarshipData.data.jsonObject);
//       }
//       setStatusMessage("Scholarship details fetched successfully.");
//     } catch (error) {
//       setStatusMessage("Failed to fetch Scholarship details.");
//     }
//   };

//   // Approve application function: prompts for an application ID and redirects to the details page
//   const approveApplication = () => {
//     const applicationId = prompt("Enter the Application ID to approve:");
//     if (applicationId) {
//       navigate(`/applications/${applicationId}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Scholarship Provider Dashboard
//       </h1>

//       {statusMessage && (
//         <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
//           {statusMessage}
//         </div>
//       )}

//       {/* Initialize Scholarships Button */}
//       <button
//         onClick={initializeScholarships}
//         className="mb-4 mr-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
//       >
//         Initialize Scholarships
//       </button>

//       {/* Fetch Only Scholarships Button */}
//       <button
//         onClick={fetchOnlyScholarships}
//         className="mb-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
//       >
//         Fetch Scholarships
//       </button>

//       {/* Scholarships Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//         {scholarships.length > 0 ? (
//           <table className="min-w-full text-left">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2">Scholarship ID</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Granted Students</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scholarships.map((scholarship) => (
//                 <tr key={scholarship.scholarshipId} className="border-b">
//                   <td className="px-4 py-2">{scholarship.scholarshipId}</td>
//                   <td className="px-4 py-2">{scholarship.amount}</td>
//                   <td className="px-4 py-2">
//                     <ul className="list-disc ml-4">
//                       {scholarship.students.length > 0 ? (
//                         scholarship.students.map((student, index) => (
//                           <li key={index}>
//                             {student.name} (ID: {student.studentId})
//                           </li>
//                         ))
//                       ) : (
//                         <li>No students granted yet</li>
//                       )}
//                     </ul>
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={approveApplication}
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
//                     >
//                       Approve Application
//                     </button>
//                     {statusResult && (
//                       <div className="mt-4 text-center text-lg text-gray-700">
//                         {statusResult}
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="p-4 text-gray-600">
//             No scholarships available. Click "Initialize Scholarships" or "Fetch
//             Scholarships" to load data.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ScholarshipProvider;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigating to another page

// Placeholder function to set scholarships via API
const setScholarships = async () => {
  const response = await fetch("/api/setScholarships", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ init: true }), // Adjust request body as needed
  });

  if (!response.ok) {
    throw new Error("Failed to set scholarships");
  }

  return response.json(); // Success message or data
};

// Placeholder function to fetch scholarships from an API
const fetchScholarships = async () => {
  const response = await fetch("/api/getScholarships", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  return response.json();
};

function ScholarshipProvider() {
  const [statusMessage, setStatusMessage] = useState("");
  const [scholarships, setScholarshipsList] = useState([]);
   const [statusResults, setStatusResults] = useState({});
const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
const [applicationId, setApplicationId] = useState("");


  const navigate = useNavigate();

  // Function to initialize scholarships (set and then fetch)
  const initializeScholarships = async () => {
    try {
      await setScholarships(); // Set scholarships on the server
      const scholarshipData = await fetchScholarships();
      if (scholarshipData.success) {
        setScholarshipsList(scholarshipData.data.jsonObject); // Store scholarships data
      }
      setStatusMessage("Scholarship details initialized successfully.");
    } catch (error) {
      setStatusMessage("Failed to initialize Scholarship details.");
    }
  };

  // Function to fetch scholarships without setting them
  const loadScholarships = async () => {
    try {
      const scholarshipData = await fetchScholarships();
      if (scholarshipData.success) {
        console.log(scholarshipData.data.jsonObject);
        setScholarshipsList(scholarshipData.data.jsonObject);
        setStatusMessage("Scholarship details loaded successfully.");
      }
    } catch (error) {
      setStatusMessage("Failed to load scholarship details.");
    }
  };

  // Function to navigate to the approval page
  const approveApplication = () => {
    navigate("/approve-application"); // Update with the correct path
  };


 const viewApplications = async (scholarshipId) => {
   try {
     const response = await fetch("/api/viewapplicationid", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ scholarshipId }),
     });
     const data = await response.json();

     if (response.ok) {
       setStatusResults((prevResults) => ({
         ...prevResults,
         [scholarshipId]: `Application id: ${data.data.decodedString}`,
       }));
     } else {
       setStatusResults((prevResults) => ({
         ...prevResults,
         [scholarshipId]:
           data.message || "Failed to retrieve application status.",
       }));
     }
   } catch (error) {
     setStatusResults((prevResults) => ({
       ...prevResults,
       [scholarshipId]: "An error occurred. Please try again.",
     }));
   }
 };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setApplicationId(""); // Clear input field when closing
  };

  // Handle submission of application ID from the modal
  const submitApplicationId = () => {
    if (applicationId) {
      closeModal();
      navigate(`/approveapplication/${applicationId}`); // Navigate with application ID in URL
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Scholarship Provider Dashboard
      </h1>

      {statusMessage && (
        <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
          {statusMessage}
        </div>
      )}

      <div className="mb-8 space-x-4">
        <button
          onClick={initializeScholarships}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Initialize Scholarships
        </button>
        <button
          onClick={loadScholarships}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Load Scholarships
        </button>
        <button
          onClick={openModal} // Open the modal on click
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
        >
          Approve Application
        </button>
      </div>

      {/* Scholarships Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        {scholarships.length > 0 ? (
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Scholarship ID</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Granted Students</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((scholarship) => (
                <tr key={scholarship.scholarshipId} className="border-b">
                  <td className="px-4 py-2">{scholarship.scholarshipId}</td>
                  <td className="px-4 py-2">{scholarship.amount}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc ml-4">
                      {scholarship.students.length > 0 ? (
                        scholarship.students.map((student, index) => (
                          <li key={index}>
                            {student.name} (ID: {student.studentId})
                          </li>
                        ))
                      ) : (
                        <li>No students granted yet</li>
                      )}
                    </ul>
                  </td>

                  <td className="px-4 py-2">
                    <button
                      onClick={() =>
                        viewApplications(scholarship.scholarshipId)
                      }
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                    >
                      View Applications
                    </button>
                    {statusResults[scholarship.scholarshipId] && (
                      <div className="mt-4 text-center text-lg text-gray-700">
                        {statusResults[scholarship.scholarshipId]}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 text-gray-600">
            No scholarships available. Click "Load Scholarships" or "Initialize
            Scholarships" to load data.
          </div>
        )}
      </div>

      {/* Modal for entering application ID */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Application ID</h2>
            <input
              type="text"
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
              placeholder="Application ID"
              className="px-4 py-2 border rounded-lg mb-4 w-full"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={submitApplicationId}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScholarshipProvider;
