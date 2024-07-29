import React, { useState } from 'react';
import './FileUpload.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const FileUpload = ({ setIsUploaded }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const fileName = selectedFile.name;
    const ext = fileName.split('.')[1]
    if(ext !== 'json'){
        alert('Please upload JSON File')
        setFile("")
        return;
    }
  };

  const handleFileUpload = () => {
    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target.result;

      try {
        const jsonData = JSON.parse(fileContent);
        localStorage.setItem("myProfile", JSON.stringify(jsonData));
        setIsUploaded(true);
        
      } catch (error) {
        console.error('Error parsing JSON file:', error.message);
        alert('Please upload valid JSON file');
      }
    };

    reader.readAsText(file);
  };


  return (
    <div className="upload-file-container">
      <h2>Upload JSON file</h2>
      <input type="file" onChange={handleFileChange} />
      <Link to="/view" onClick={handleFileUpload}>Upload File</Link>
      <div className='create-profile'>
       <hr className="hr-text" data-content="or"/>
      <Link to="/new">Create a profile</Link>
      </div>
    </div>
  );
};

export default FileUpload;
