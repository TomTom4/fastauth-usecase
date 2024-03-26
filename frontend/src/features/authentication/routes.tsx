import AuthLayout from "./layout";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

const authRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "sign-in",
      element: <SignIn />,
      index: true,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
};

export default authRoutes;
