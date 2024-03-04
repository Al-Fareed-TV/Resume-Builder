import React from 'react';
const data = require("../data/user-profile.json")
const JsonReader = () => {
data.map((item) => {
    return (
        <div>
          <p>{item.profile}</p>
        </div>
      );
    });
  ;

  
};

export default JsonReader;
