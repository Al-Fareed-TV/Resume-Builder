//Forms.js
import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { addUserProfileFormData,addUserCustomFormData } from "../../app/profileSlice";

const ProfileForm = ({ handleProfileInputChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    designation: "",
    desc: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleProfileInputChange(name, value);
    dispatch(addUserProfileFormData({ key: name, value }));
  };

  return (
    <div className="container">
      <h2> Profile</h2>
      <input
        value={formData.name}
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <div className="inner-container">
        <input
          value={formData.experience}
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />
        <input
          value={formData.designation}
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
        />
      </div>
      <input
        value={formData.desc}
        name="desc"
        placeholder="Description"
        onChange={handleChange}
      />
    </div>
  );
};

const CustomForm = ({ handleCustomFormInputChange, index }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [lists, setLists] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    lists: [],
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    dispatch(addUserCustomFormData({ key: name, value, index }));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    handleChange(e);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    handleChange(e);
  };

  const handleListChanges = (e) => {
    const listItems = e.target.value.split("\n");
    setLists(listItems);
    handleChange(e);
  };

  return (
    <div className="container">
      <h2>Custom Form</h2>
      <input
        value={title}
        name="title"
        placeholder="Title"
        onChange={handleTitleChange}
      />
      <input
        value={desc}
        name="desc"
        placeholder="Description"
        onChange={handleDescChange}
      />

      <textarea
        value={lists.join("\n")}
        name="list"
        placeholder=""
        onChange={handleListChanges}
      />
      {lists.length > 0 && (
        <div className="bullet-list">
          <ul>
            {lists.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { ProfileForm, CustomForm };
