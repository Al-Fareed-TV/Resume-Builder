import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  userProfile: [],
};

const addProfileData = (state, action) => {
  const userProfile = {
    id: nanoid(),
    text: action.payload,
  };
  state.userProfile.push(userProfile);
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addData: addProfileData,
  },
});

export const {addData} = profileSlice.actions;

export default profileSlice.reducer;