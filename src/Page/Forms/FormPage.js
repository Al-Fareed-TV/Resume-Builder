import React, { useState, useEffect } from "react";
import { ProfileForm, CustomForm } from "./Form";
import "./FormPage.css";
import {
  handleAddCustomForm,
  handleListChange,
  handleRemoveCustomForm,
} from "./FormActions/Actions";
import { StyleSheet,PDFViewer } from "@react-pdf/renderer";
import MyPDF from "../MyPDF";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const styles = StyleSheet.create({
  viewer: {
    width: "40vw",
    minHeight: "80vh",
  },
});
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
  };

  useEffect(() => {
    if (formData.customForms.length === 0) {
      handleAddCustomForm();
    }
  });

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <ProfileForm handleProfileInputChange={handleProfileInputChange} />
        {formData.customForms.map((form, index) => (
          <CustomForm
            key={index}
            index={index}
            form={form}
            handleCustomFormInputChange={() => handleCustomFormInputChange()}
            onListChange={(value) =>
              handleListChange(index, value, setFormData)
            }
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
          <Link to='/view'>Submit</Link>
        </div>
      </form>
      <div className="pdf-viewer">
        <PDFViewer style={styles.viewer} >
          <MyPDF />
        </PDFViewer>
      </div>
    </div>
  );
};

export default FormPage;
