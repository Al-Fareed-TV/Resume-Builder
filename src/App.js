import React, { useState, useEffect } from "react";
import DownloadPDF from "./Page/DownloadPDF";
import MyPDF from "./Page/MyPDF";
import LoadingPage from "./Page/LoadingPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <LoadingPage />}
      {!loading && <MyPDF />}
      {!loading && <DownloadPDF />}
    </div>
  );
};

export default App;
