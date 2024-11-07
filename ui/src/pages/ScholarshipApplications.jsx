import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Mock function to fetch applications for a specific scholarship
const fetchApplicationsForScholarship = (scholarshipId) => {
  // Sample data for applications against scholarship IDs
  const applicationsData = {
    SCH001: [
      { applicationId: "APP001", studentId: "S123", status: "Pending" },
      { applicationId: "APP002", studentId: "S124", status: "Approved" },
    ],
    SCH002: [
      { applicationId: "APP003", studentId: "S125", status: "Rejected" },
    ],
    // Add more scholarships and applications as needed
  };
  return applicationsData[scholarshipId] || [];
};

function ScholarshipApplications() {
  const { scholarshipId } = useParams(); // Fetch the scholarshipId from URL params
  const [applications, setApplications] = useState([]);

  // Fetch applications for the scholarship ID on component load
  useEffect(() => {
    const fetchedApplications = fetchApplicationsForScholarship(scholarshipId);
    setApplications(fetchedApplications);
  }, [scholarshipId]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Applications for Scholarship ID: {scholarshipId}
      </h1>

      {applications.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Application ID</th>
                <th className="px-4 py-2">Student ID</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.applicationId} className="border-b">
                  <td className="px-4 py-2">{application.applicationId}</td>
                  <td className="px-4 py-2">{application.studentId}</td>
                  <td className="px-4 py-2">{application.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-700 mt-4">
          No applications found for this scholarship.
        </p>
      )}
    </div>
  );
}

export default ScholarshipApplications;
