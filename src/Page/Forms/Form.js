//Forms.js
import React, { useEffect, useState } from "react";
import "./Form.css";

const ProfileForm = ({ handleProfileInputChange }) => {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    handleProfileInputChange("title", e.target.value);
  };
  const handleOrgChange = (e) => {
    setOrg(e.target.value);
    handleProfileInputChange("org", e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
    handleProfileInputChange("date", e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
    handleProfileInputChange("desc", e.target.value);
  };

  return (
    <div className="container">
      <h2> Profile</h2>
      <input
        value={name}
        placeholder="Name"
        onChange={handleNameChange}
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


const CustomForm = ({ handleCustomFormInputChange,index }) => {
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const handleTitleChange = () => {

  }
const handleListChanges = () => {
    
  }
const handleDescChange = () => {
    
  }


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
        value={lists.join('\n')}
        placeholder="Custom List"
        onChange={handleListChanges}
      />
      {lists.length > 0 && (
        <div className="bullet-list">
          <ul>
            {lists.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { ProfileForm, CustomForm };
