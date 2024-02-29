export const handleAddCustomForm = ({setFormData}) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      customForms: [...prevFormData.customForms, { title: "", desc: "", skills: [] }],
    }));
  };

  export const handleListChange = (index, value, setFormData) => {
    setFormData((prevFormData) => {
      const customForms = [...prevFormData.customForms];
      customForms[index].skills = value.split("\n").map((skill) => skill.trim());
      return {
        ...prevFormData,
        customForms,
      };
    });
  };

  export const handleRemoveCustomForm = (formData, setFormData) => {
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