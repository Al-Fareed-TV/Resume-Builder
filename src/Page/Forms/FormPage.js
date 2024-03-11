import React, { useState, useEffect } from "react";
import { ProfileForm, CustomForm } from "./Form";
import "./FormPage.css";
import {
  handleAddCustomForm,
  handleListChange,
  handleRemoveCustomForm,
} from "./FormActions/Actions";

const FormPage = () => {

  const [formData, setFormData] = useState({
    profile: { name: "", org: "", date: "", desc: "" },
    customForms: [{ title: "", desc: "", lists: [] }],
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
  
  const handleCustomFormInputChange = (index, data) => {
    setFormData((prevFormData) => {
      const updatedCustomForms = [...prevFormData.customForms];
      updatedCustomForms[index] = data;
      return { ...prevFormData, customForms: updatedCustomForms };
    });
    console.log("Input ",formData);
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
    // const profileData = {
    //   name: formData.profile.title,
    //   org: formData.profile.org,
    //   date: formData.profile.date,
    //   desc: formData.profile.desc,
    // };

    // const customFormsData = formData.customForms.map((form) => ({
    //   title: form.title,
    //   desc: form.desc,
    //   lists: form.lists,
    // }));

    // const formDataJson = {
    //   profile: profileData,
    //   customForms: customFormsData,
    // };
    // localStorage.setItem("userProfile", JSON.stringify(profileData));
    // console.log(
    //   "User profile saved ",
    //   JSON.parse(localStorage.getItem("myProfile"))
    // );
    // console.log("Data Recieved = ", formDataJson);
    // dispatch(addData(formDataJson));
  };

  useEffect(() => {
    if (formData.customForms.length === 0) {
      handleAddCustomForm();
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <ProfileForm handleProfileInputChange={handleProfileInputChange} />
      {formData.customForms.map((form, index) => (
        <CustomForm
          key={index}
          index={index}
          form={form}
          handleCustomFormInputChange={() => handleCustomFormInputChange()}
          onListChange={(value) => handleListChange(index, value, setFormData)}
        />
      ))}
      
      <div className="form-button-container">
        <div className="button-container">
          <button
            type="button"
            onClick={() => handleAddCustomForm({ setFormData })}
          >
            Add Custom Form
          </button>
          <button
            type="button"
            onClick={() => handleRemoveCustomForm(formData, setFormData)}
          >
            Remove Custom Form
          </button>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormPage;
