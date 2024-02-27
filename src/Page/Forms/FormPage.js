// FormPage.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProfileForm, CustomForm } from "./Form";
import "./FormPage.css";

const FormPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    profile: { title: "", org: "", date: "", desc: "" },
    customForms: [{ title: "", desc: "", skills: [] }], 
  });

  const handleProfileInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile: {
        ...prevFormData.profile,
        [name]: value,
      },
    }));
  };

  const handleAddCustomForm = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      customForms: [...prevFormData.customForms, { title: "", desc: "", skills: [] }],
    }));
  };

  const handleCustomFormInputChange = (index, name, value) => {
    setFormData((prevFormData) => {
      const customForms = [...prevFormData.customForms];
      customForms[index] = {
        ...customForms[index],
        [name]: value,
      };
      return {
        ...prevFormData,
        customForms,
      };
    });
  };

  const handleListChange = (index, value) => {
    setFormData((prevFormData) => {
      const customForms = [...prevFormData.customForms];
      customForms[index].skills = value.split("\n").map((skill) => skill.trim());
      return {
        ...prevFormData,
        customForms,
      };
    });
  };

  const handleRemoveCustomForm = () => {
    if (formData.customForms.length > 1) {
      setFormData((prevFormData) => {
        const customForms = [...prevFormData.customForms];
        customForms.pop(); 
        return {
          ...prevFormData,
          customForms,
        };
      });
    } else {
      alert("At least one custom form is required.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch((formData)); 
  };

  useEffect(() => {
    if (formData.customForms.length === 0) {
      handleAddCustomForm();
    }
  }); 

  return (
    <form onSubmit={handleSubmit}>
      <ProfileForm onChange={handleProfileInputChange} />
      {formData.customForms.map((form, index) => (
        <CustomForm
          key={index}
          index={index}
          form={form}
          onInputChange={handleCustomFormInputChange}
          onListChange={handleListChange}
        />
      ))}
      <div className="form-button-container">
      <div className="button-container">
      <button type="button" onClick={handleAddCustomForm}>
        Add Custom Form
      </button>
      <button type="button" onClick={handleRemoveCustomForm}>
        Remove Custom Form
      </button></div>
      <button type="submit">Submit</button>
      </div>

    </form>
  );
};

export default FormPage;
