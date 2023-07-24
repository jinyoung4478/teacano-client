import { createBrowserRouter } from "react-router-dom";
import Root from "@/Root";
import { NotLoginRequire } from "@/components/LoginRequire";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Grid from "@/pages/Grid";
import SortablePage from "@/pages/Sortable";
import DndPage from "@/pages/Dnd";
import NotFound from "@/pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/grid",
        element: <Grid />,
      },
      {
        path: "/sortable",
        element: <SortablePage />,
      },
      {
        path: "/dnd",
        element: <DndPage />,
      },
      {
        element: <NotLoginRequire />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default routes;
