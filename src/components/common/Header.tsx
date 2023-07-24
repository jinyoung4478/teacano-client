import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed w-full  top-0 left-0 right-0 z-50 shadow-sm h-[72px]">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto h-full px-4">
        <div className="flex gap-8">
          <Link to="/" className="mr-24">
            Home
          </Link>
        </div>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
    </header>
  );
};
