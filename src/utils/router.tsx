import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Narasumber from "../pages/Narasumber";
import Login from "../pages/Login";
import Sosialisasi from "../pages/Sosialisasi";
import PelatihanA from "../pages/PelatihanA";
import PelatihanB from "../pages/PelatihanB";
import PelatihanC from "../pages/PelatihanC";
import Pendampingan from "../pages/Pendampingan";
import Apresiasi from "../pages/Apresiasi";
import Profile from "../pages/Profile";

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
    path: "/pelatihan-a",
    element: <PelatihanA />
  },
  {
    path: "/pelatihan-b",
    element: <PelatihanB />
  },
  {
    path: "/pelatihan-c",
    element: <PelatihanC />
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
]);

export default router;