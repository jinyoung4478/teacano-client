import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet context={{ darkMode: false }} />
      <ScrollToTop />
    </div>
  );
};

export default Root;
