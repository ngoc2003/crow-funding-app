import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
  },
  reducers: {
    signIn: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    },
    signUp: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    },
  },
});

export const {signIn, signUp} = authSlice.actions

export default authSlice.reducer
