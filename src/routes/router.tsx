import { createBrowserRouter } from "react-router-dom";
import { Home, GameDetailsPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <GameDetailsPage />,
  },
]);
