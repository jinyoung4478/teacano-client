import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet context={{ darkMode: false }} />
      <ScrollToTop />
    </div>
  );
}

export default Root;
