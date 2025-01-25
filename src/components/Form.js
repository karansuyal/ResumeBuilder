import React, { useState } from "react";

const Form = ({ resumeData, setResumeData }) => {
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const addToArray = (key, value, clearFunc) => {
    // Ensure that the input value is not empty
    if (value.trim() !== "") {
      setResumeData({ ...resumeData, [key]: [...resumeData[key], value] });
      clearFunc(""); // Clear the input after adding
    }
  };

  return (
    <div style={{ width: "45%" }}>
      <h2>Enter Details</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={resumeData.name}
        onChange={handleChange}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={resumeData.email}
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        value={resumeData.phone}
        onChange={handleChange}
      />
      <br />
      <label>Objective:</label>
      <textarea
        name="objective"
        value={resumeData.objective}
        onChange={handleChange}
      />
      <br />

      {/* Education */}
      <label>Education:</label>
      <input
        type="text"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <button
        onClick={() => addToArray("education", education, setEducation)}
      >
        Add
      </button>
      <br />

      {/* Experience */}
      <label>Experience:</label>
      <input
        type="text"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <button
        onClick={() => addToArray("experience", experience, setExperience)}
      >
        Add
      </button>
      <br />

      {/* Projects */}
      <label>Projects:</label>
      <input
        type="text"
        value={projects}
        onChange={(e) => setProjects(e.target.value)}
      />
      <button
        onClick={() => addToArray("projects", projects, setProjects)}
      >
        Add
      </button>
      <br />

      <label>Skills (comma-separated):</label>
      <input
        type="text"
        name="skills"
        value={resumeData.skills}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
