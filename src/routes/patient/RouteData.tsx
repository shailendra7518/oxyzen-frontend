import Home from "../../pages/patient/Home";
import Login from "../../components/common/auth/Login";
import Hospitals from "../../pages/patient/Hospitals";
import Doctors from "../../pages/patient/Doctors";
import SingleDoctor from "../../pages/patient/SingleDoctor";
import Register from "../../components/common/auth/Register";
import Profile from "../../pages/patient/Profile";
import { PRIVATE, PUBLIC, Route } from "../../constant/routeTypes";
import { Role } from "../../constant/role";
import PageNotFound from "../../pages/patient/PageNotFound";
import UnderConstructionPage from "../../pages/patient/PageUnderCunstruction";
import AboutSection from "../../pages/patient/About";


const RoutesData: Route[] = [
  {
    path: "/",
    element: <Home />,
    role: null,
    type: PUBLIC,
  },
  {
    path: "/auth/login",
    element: <Login />,
    role: null,
    type: PUBLIC,
  },
  {
    path: "/auth/register",
    element: <Register />,
    role: null,
    type: PUBLIC,
  },
  {
    path: "/user/profile",
    element: <Profile />,
    role: Role.Patient,
    type: PRIVATE,
  },
  {
    path: "/hospitals",
    element: <Hospitals />,
    role: Role.Patient,
    type: PUBLIC,
  },
  {
    path: "/doctors",
    element: <Doctors />,
    role: Role.Patient,
    type: PUBLIC,
  },
  {
    path: "/single-doctor/:id",
    element: <SingleDoctor />,
    role: Role.Patient,
    type: PRIVATE,
  },
  {
    path: "/single-doctor",
    element: <SingleDoctor />,
    role: Role.Patient,
    type: PRIVATE,
  },
  {
    path: "/cities",
    element: <UnderConstructionPage />,
    role: Role.Patient,
    type: PUBLIC,
  },
  {
    path: "/categories",
    element: <UnderConstructionPage />,
    role: Role.Patient,
    type: PUBLIC,
  },
  {
    path: "/about",
    element: <AboutSection />,
    role: Role.Patient,
    type: PUBLIC,
  },
  {
    path: "*",
    element: <PageNotFound />,
    role: Role.Patient,
    type: PRIVATE,
  },
];

export default RoutesData;
