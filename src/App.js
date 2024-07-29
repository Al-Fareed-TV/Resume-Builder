import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import LoadingPage from "./Page/LoadingPage";
import MyPDF from "./Page/MyPDF";
import DownloadPDF from "./Page/DownloadPDF";
import FileUpload from "./Page/Forms/FileUpload";
import FormPage from "./Page/Forms/FormPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          {loading && <LoadingPage />}
          {!loading && (
            <Router>
              <Route path="/">
                {!isUploaded && <FileUpload setIsUploaded={setIsUploaded} />}
              </Route>
              <Route path="/view" exact>
                <MyPDF isUploaded={isUploaded} />
                {isUploaded && <DownloadPDF />}
              </Route>
              <Route path="/new" exact>
                <FormPage />
              </Route>
            </Router>
            )}
            <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
