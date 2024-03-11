import React, { useState, useEffect } from "react";
import LoadingPage from "./Page/LoadingPage";
// import MyPDF from "./Page/MyPDF";
// import DownloadPDF from "./Page/DownloadPDF";
// import FileUpload from "./Page/Forms/FileUpload";
import FormPage from "./Page/Forms/FormPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
    {loading && <LoadingPage />}
    {!loading && <FormPage />}
    {/**
      {!loading && !isUploaded && <FileUpload setIsUploaded={setIsUploaded} />}
      {!loading && isUploaded && (
        <React.Fragment>
        <MyPDF isUploaded={isUploaded} />
        <DownloadPDF />
        </React.Fragment>
        )}
      */}
    </div>
  );
}

export default App;
