import { Header, Main, Footer } from "@/components/common";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Dashboard</h1>
        <div className="p-8"></div>
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
