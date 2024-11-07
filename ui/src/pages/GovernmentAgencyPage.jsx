import React, { useEffect, useState } from "react";

function GovernmentAgentPage() {
  const [applications, setApplications] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  // Fetch approved applications on component mount
  useEffect(() => {
    const fetchApprovedApplications = async () => {
      try {
        const response = await fetch("/api/getSPApprovedApplications", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch approved applications");
        }
        
        const data = await response.json();
        console.log(data);
        setApplications(data.data.jsonObject.map((obj) => obj.Record) || []);
      } catch (error) {
        setStatusMessage("An error occurred while fetching applications.");
      }
    };

    fetchApprovedApplications();
  }, []);

  // Function to allocate funds for a specific application
  const allocateFund = async (scholarshipId, applicationId) => {
    try {
      const response = await fetch("/api/allocateFund", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scholarshipId, applicationId }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatusMessage(result.message || "Funds allocated successfully.");
      } else {
        setStatusMessage(result.message || "Failed to allocate funds.");
      }
    } catch (error) {
      setStatusMessage("An error occurred while allocating funds.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Approved Applications</h1>

      {statusMessage && (
        <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">{statusMessage}</div>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        {applications.length > 0 ? (
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Application ID</th>
                <th className="px-4 py-2">University ID</th>
                <th className="px-4 py-2">Student ID</th>
                <th className="px-4 py-2">Scholarship ID</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.applicationId} className="border-b">
                  <td className="px-4 py-2">{app.applicationId}</td>
                  <td className="px-4 py-2">{app.universityId}</td>
                  <td className="px-4 py-2">{app.studentId}</td>
                  <td className="px-4 py-2">{app.scholarshipId}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => allocateFund(app.scholarshipId, app.applicationId)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                    >
                      Allocate Fund
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 text-gray-600">No approved applications available.</div>
        )}
      </div>
    </div>
  );
}

export default GovernmentAgentPage;
