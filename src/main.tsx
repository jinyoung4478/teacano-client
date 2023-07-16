import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@material-tailwind/react";
import routes from "@/routes";
import "@/styles/main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RecoilRoot>
        <RouterProvider router={routes} />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
