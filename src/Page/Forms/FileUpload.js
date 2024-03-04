import React, { useState } from 'react';

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
    localStorage.removeItem('userProfile');

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target.result;

      try {
        const jsonData = JSON.parse(fileContent);
        localStorage.setItem('userProfile', JSON.stringify(jsonData));
        setIsUploaded(true);
      } catch (error) {
        console.error('Error parsing JSON file:', error.message);
        alert('Please upload valid JSON file');
      }
    };

    reader.readAsText(file);
  };


  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;
