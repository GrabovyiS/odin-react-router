import App from "./App";

import Ingredients from "./pages/Ingredients";
import Cooks from "./pages/Cooks";
import CookProfile from "./pages/CookProfile";
import BelPepper from "./components/BelPepper";
import Spinach from "./components/Spinach";
import Salt from "./components/Salt";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ingredients",
    element: <Ingredients />,
    children: [
      { index: true, element: <BelPepper /> },
      { path: "spinach", element: <Spinach /> },
      { path: "salt", element: <Salt /> },
      { path: "bel-pepper", element: <BelPepper /> },
    ],
  },
  {
    path: "cooks",
    element: <Cooks />,
  },
  {
    path: "cooks/:cookName",
    element: <CookProfile />,
  },
];

export default routes;
