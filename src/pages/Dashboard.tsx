import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { Header, Main, Footer } from "@/components/layouts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Dashboard</h1>
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
