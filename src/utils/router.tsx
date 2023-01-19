import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Narasumber from "../pages/Narasumber";
import Login from "../pages/Login";
import Sosialisasi from "../pages/Sosialisasi";
import Pelatihan from "../pages/Pelatihan";
import Pendampingan from "../pages/Pendampingan";
import Apresiasi from "../pages/Apresiasi";
import Profile from "../pages/Profile";
import Publikasi from "../pages/Publikasi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/narasumber",
    element: <Narasumber />
  },
  {
    path: "/sosialisasi",
    element: <Sosialisasi />
  },
  {
    path: "/pelatihan",
    element: <Pelatihan />
  },
  {
    path: "/pendampingan",
    element: <Pendampingan />
  },
  {
    path: "/apresiasi",
    element: <Apresiasi />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/publikasi",
    element: <Publikasi />
  },
]);

export default router;