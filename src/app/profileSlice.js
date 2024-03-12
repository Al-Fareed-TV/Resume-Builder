import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: { name: "", experience: "", designation: "", desc: "",url:"" },
  customForm: [{ title: "", desc: "", list: [] }],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addUserProfileFormData: (state, action) => {
      const { key, value } = action.payload;
      state.profile[key] = value;
      localStorage.setItem("myProfile", JSON.stringify(state));
    },
    addUserCustomFormData: (state, action) => {
      const { key, value,index } = action.payload;
      if (index === state.customForm.length) {
        state.customForm.push({ title: "", desc: "", list: [] });
      }
      state.customForm[index][key] = value; 
      localStorage.setItem("myProfile", JSON.stringify(state));
    },
  },
});

export const { addUserProfileFormData, addUserCustomFormData } =
  profileSlice.actions;

export default profileSlice.reducer;
