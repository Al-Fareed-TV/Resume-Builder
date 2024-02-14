import React from 'react';
const data = require("../data/user-profile.json")
const JsonReader = () => {
data.map((item) => {
    console.log("Json data :",item.profile);
    return (
        <div>
          <p>{item.profile}</p>
        </div>
      );
    });
  ;

  
};

export default JsonReader;
