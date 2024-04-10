import { createBrowserRouter } from "react-router-dom";
import websiteRoutes from "./features/website/routes";
import authRoutes from "./features/authentication/routes";
import todoListRoutes from "./features/todolist/routes";

const router = createBrowserRouter([websiteRoutes, authRoutes, todoListRoutes]);

export default router;
