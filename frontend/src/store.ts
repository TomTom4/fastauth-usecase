import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authenticationReducer from "./features/authentication/slice";
import { Api } from "./AppApi";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    auth: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//optional
setupListeners(store.dispatch);
