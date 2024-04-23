import axios from "./axios";
import { User } from "./schemas";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import toast from "react-hot-toast";

// Define a type for the slice state
export interface AuthState {
  isAuthenticated: boolean;
  accessToken: object;
  user: object;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: {},
  user: {},
};

export const authSlice = createSlice({
  name: "authentication",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userData(state, action) {
      state.user = action.payload;
    },
    signinSuccess(state, action) {
      state.accessToken = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

export function register(user: User) {
  return async (dispatch, getState) => {
    try {
      dispatch(authSlice.actions.userData(user));
      await axios.post("/register", user);
      toast.success("you are registered");
    } catch (error) {
      toast.error(error.message);
    }
  };
}

export function signin(user: User) {
  return async (dispatch, getState) => {
    try {
      dispatch(authSlice.actions.userData(user));
      const formData = new FormData();
      formData.append("grant_type", "password");
      formData.append("username", user.email);
      formData.append("password", user.password);
      const response = await axios.post("/signin", formData);
      dispatch(authSlice.actions.signinSuccess(response.data.accessToken));
      console.log(response);
      toast.success("you signed in!");
    } catch (error) {
      toast.error(error.message);
    }
  };
}
