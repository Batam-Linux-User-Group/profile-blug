import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/pengurus",
    element: <h1>Hello! Ini page pengurus!</h1>
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
