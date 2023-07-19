import { Header, Main, Footer } from "@/components/layouts";

const Todo = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Todo List</h1>
      </Main>
      <Footer />
    </>
  );
};

export default Todo;
