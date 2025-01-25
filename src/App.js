import React from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import jsPDF from "jspdf";

const App = () => {
  const [resumeData, setResumeData] = React.useState({
    name: "",
    email: "",
    phone: "",
    objective: "",
    education: [],
    experience: [],
    skills: "",
    projects: [],
  });

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Resume", 10, 10);
    doc.setFontSize(12);

    doc.text(`Name: ${resumeData.name}`, 10, 20);
    doc.text(`Email: ${resumeData.email}`, 10, 30);
    doc.text(`Phone: ${resumeData.phone}`, 10, 40);
    doc.text(`Objective: ${resumeData.objective}`, 10, 50);

    let y = 60;
    doc.text("Education:", 10, y);
    resumeData.education.forEach((edu) => {
      y += 10;
      doc.text(`- ${edu}`, 15, y);
    });

    y += 10;
    doc.text("Experience:", 10, y);
    resumeData.experience.forEach((exp) => {
      y += 10;
      doc.text(`- ${exp}`, 15, y);
    });

    y += 10;
    doc.text("Skills:", 10, y);
    y += 10;
    doc.text(resumeData.skills, 15, y);

    y += 10;
    doc.text("Projects:", 10, y);
    resumeData.projects.forEach((proj) => {
      y += 10;
      doc.text(`- ${proj}`, 15, y);
    });

    doc.save("resume.pdf");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Resume Builder</h1>
      <div className="row">
        <div className="col-md-6">
          <Form resumeData={resumeData} setResumeData={setResumeData} />
        </div>
        <div className="col-md-6">
          <Preview resumeData={resumeData} />
          <button className="btn btn-primary mt-3" onClick={handleDownload}>
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
