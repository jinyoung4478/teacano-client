import { createBrowserRouter } from "react-router-dom";
import Root from "@/Root";
import { NotLoginRequire } from "@/components/LoginRequire";
import Home from "@/pages/Home";
import Todo from "@/pages/Todo";
import Dashboard from "@/pages/Dashboard";
import SortablePage from "@/pages/Sortable";
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
        path: "/todos",
        element: <Todo />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/sortable",
        element: <SortablePage />,
      },
      {
        element: <NotLoginRequire />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default routes;
