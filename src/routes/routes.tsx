import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
