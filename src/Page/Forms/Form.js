import React, { useState } from "react";
import "./Form.css";

const ProfileForm = ({ onInputChange }) => {
  const [title, setTitle] = useState("");
  const [org, setOrg] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onInputChange("title", e.target.value);
  };
  const handleOrgChange = (e) => {
    setOrg(e.target.value);
    onInputChange("org", e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
    onInputChange("date", e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
    onInputChange("desc", e.target.value);
  };

  return (
    <div className="container">
      <h2> Profile</h2>
      <input
        value={title}
        placeholder="Name"
        onChange={handleTitleChange}
      />
      <div className="inner-container">
        <input
          value={org}
          placeholder="Organization"
          onChange={handleOrgChange}
        />
        <input
          value={date}
          placeholder="Jun - 2022"
          onChange={handleDateChange}
        />
      </div>
      <input
        value={desc}
        placeholder="Description"
        onChange={handleDescChange}
      />
    </div>
  );
};


const CustomForm = ({ onInputChange }) => {
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleListChange = (e) => {
    const value = e.target.value;
    const skillsArray = value.split('\n');
    setSkills(skillsArray);
    onInputChange("skills", skillsArray);
  };
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onInputChange("title", e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    onInputChange("desc", e.target.value);
  };

  return (
    <div className="container">
      <h2> Custom Form</h2>
      <input
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
      />
      <input
        value={desc}
        placeholder="Description"
        onChange={handleDescChange}
      />
      
      <textarea autosize='true'
        value={skills.join('\n')}
        placeholder="Custom List"
        onChange={handleListChange}
      />
      {skills.length > 0 && (
        <div className="bullet-list">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { ProfileForm, CustomForm };
