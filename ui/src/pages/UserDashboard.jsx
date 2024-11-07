import React, { useState } from "react";

function UserDashboard() {
  // State variables to control popup visibility
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // State variables for form data
  const [studentId, setStudentId] = useState("");
  const [name, setname] = useState("");
  const [scholarshipId, setScholarshipId] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusResult, setStatusResult] = useState("");

  // Functions to open and close modals
  const openApplyModal = () => setShowApplyModal(true);
  const closeApplyModal = () => setShowApplyModal(false);

  const openReviewModal = () => setShowReviewModal(true);
  const closeReviewModal = () => setShowReviewModal(false);

  // Function to handle form submission for applying to a scholarship
  const handleApplySubmit = async (e) => {
    e.preventDefault();

    // API call using fetch
    try {
      const response = await fetch("/api/createStudentApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          name,
          scholarshipId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Application submitted successfully!");
        // Clear form fields
        setStudentId("");
        setname("");
        setScholarshipId("");
        closeApplyModal();
      } else {
        setStatusMessage(data.message || "Failed to submit application.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
    }
  };

  // Function to handle checking the application status
  const handleStatusCheck = async (e) => {
    e.preventDefault();

    // API call to check status
    try {
      const response = await fetch(`/api/readstudentapplication`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
        }),
      });
      const data = await response.json();
      console.log(data.data.jsonObject);

      const details = data.data.jsonObject;
      const studentdetails={
        studentid:details.studentId,
        name:details.name,
        course:details.course,
        gpa:details.gpa,
        scholarshipId:details.scholarshipId,
        status:details.status
      }

      if (response.ok) {
        setStatusResult(`Application Status: ${studentdetails.status}`);
      } else {
        setStatusResult(
          data.message || "Failed to retrieve application status."
        );
      }
    } catch (error) {
      setStatusResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User Dashboard</h1>

      {/* Status message */}
      {statusMessage && (
        <div className="mb-4 text-center text-lg text-blue-700">
          {statusMessage}
        </div>
      )}

      {/* Initial Buttons */}
      <div className="space-y-4">
        <button
          onClick={openApplyModal}
          className="px-6 mr-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
          Apply for New Scholarship
        </button>
        <button
          onClick={openReviewModal}
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-200"
        >
          Review Applied Status
        </button>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closeApplyModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Apply for Scholarship
            </h2>
            <form onSubmit={handleApplySubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <input
                type="text"
                placeholder="Scholarship Id"
                value={scholarshipId}
                onChange={(e) => setScholarshipId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              /> */}
              <select
                value={scholarshipId}
                onChange={(e) => setScholarshipId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="scholarship1">Scholarship 1</option>
                <option value="scholarship2">Scholarship 2</option>
                <option value="scholarship3">Scholarship 3</option>
                {/* Add more scholarships here as needed */}
              </select>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closeReviewModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Review Application Status
            </h2>
            <form onSubmit={handleStatusCheck} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-200"
              >
                Check Status
              </button>
            </form>
            {statusResult && (
              <div className="mt-4 text-center text-lg text-gray-700">
                {statusResult}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
