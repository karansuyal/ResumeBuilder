import React, { forwardRef } from "react";

const Preview = forwardRef(({ resumeData }, ref) => (
  <div
    ref={ref}
    style={{
      border: "1px solid black",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ textAlign: "center", color: "#333" }}>Resume</h2>
    <p><strong>Name:</strong> {resumeData.name}</p>
    <p><strong>Email:</strong> {resumeData.email}</p>
    <p><strong>Phone:</strong> {resumeData.phone}</p>
    <p><strong>Objective:</strong> {resumeData.objective}</p>

    <h3>Education:</h3>
    <ul>
      {resumeData.education.map((edu, index) => (
        <li key={index}>{edu}</li>
      ))}
    </ul>

    <h3>Experience:</h3>
    <ul>
      {resumeData.experience.map((exp, index) => (
        <li key={index}>{exp}</li>
      ))}
    </ul>

    <h3>Skills:</h3>
    <p>{resumeData.skills}</p>

    <h3>Projects:</h3>
    <ul>
      {resumeData.projects.map((proj, index) => (
        <li key={index}>{proj}</li>
      ))}
    </ul>
  </div>
));

export default Preview;
