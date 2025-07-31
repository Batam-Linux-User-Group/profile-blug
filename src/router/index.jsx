import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import Pengurus from "../pages/Pengurus"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/pengurus",
    element: <Pengurus />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
