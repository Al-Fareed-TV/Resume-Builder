const fs = require("fs");

export const userProfile = () => {
  return readJsonFile() ? 
    readJsonFile().profile : null;
};

export const userSkills = () => {
  return readJsonFile() ? 
    readJsonFile().skills : null;
};

export const codeReference = () => {
  return readJsonFile() ? 
    readJsonFile().codeReference : null;
};
export const userTraining = () => {
  return readJsonFile() ? 
    readJsonFile().training : null;
};
export const userProjects = () => {
  return readJsonFile() ? 
    readJsonFile().projects : null;
};

function readJsonFile() {
  const filePath = "src/data/user-profile.json";
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (err) {
    return null;
  }
}
