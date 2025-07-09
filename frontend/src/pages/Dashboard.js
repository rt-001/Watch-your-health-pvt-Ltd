import React, { useState } from "react";

const Dashboard = () => {
  const [sessionId, setSessionId] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const handleGenerate = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/report/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ session_id: sessionId }),
    });

    const data = await res.json();

    if (data.path) {
      const fullUrl = `http://localhost:4000${data.path}`;
      setPdfLink(fullUrl);
      setFileName(data.path.split("/").pop()); // Extract filename
    } else {
      alert(data.message || "Failed to generate report");
    }
  };
  return (
    <div className="dashboard-container">
      <h2>Generate Report</h2>
      <input
        type="text"
        placeholder="Enter session_id"
        value={sessionId}
        onChange={(e) => setSessionId(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate PDF</button>

      {pdfLink && (
        <div className="pdf-link">
          <p>Report generated:</p>
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
