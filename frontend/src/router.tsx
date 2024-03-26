import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./features/authentication/routes";

const router = createBrowserRouter([
  { path: "/", element: <div>hello world</div> },
  authRoutes,
]);

export default router;
