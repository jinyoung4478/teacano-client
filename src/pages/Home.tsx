import { Header, Main, Footer } from "@/components/common";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Welcome to Teacano!</h1>
        <div className="w-full flex justify-evenly"></div>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
