import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import Tentang from "../pages/Tentang";
import Pengurus from "../pages/Pengurus";
import Artikel from "../pages/Artikel";
import Kontak from "../pages/Kontak";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/tentang",
    element: <Tentang />
  },
  {
    path: "/pengurus",
    element: <Pengurus />
  },
  {
    path: "/artikel",
    element: <Artikel />
  },
  {
    path: "/kontak",
    element: <Kontak />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
