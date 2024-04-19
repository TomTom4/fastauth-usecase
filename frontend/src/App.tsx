import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
