import axios from "./axios";
import { User } from "./schemas";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define a type for the slice state
export interface AuthState {
  isAuthenticated: boolean;
  user: object;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: "authentication",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

export function register(user: User) {
  return async (dispatch, getState) => {
    await axios.post("/register", user);
  };
}
