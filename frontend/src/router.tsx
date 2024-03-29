import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./features/authentication/routes";
import todoListRoutes from "./features/todolist/routes";

const router = createBrowserRouter([
  { path: "/", element: <div>hello world</div> },
  authRoutes,
  todoListRoutes,
]);

export default router;
