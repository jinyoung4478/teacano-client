import { Header, Main, Footer } from "@/components/layouts";
import AnimationCard from "@/components/AnimationCard";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Welcome to Teacano!</h1>
        <div className="w-full flex justify-evenly">
          <AnimationCard />
          <div>123</div>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
