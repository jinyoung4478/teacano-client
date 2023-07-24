import { Link } from "react-router-dom";

interface IHeaderItemProps {
  size?: "sm" | "md" | "lg";
  text: string;
  className?: string;
}

const HeaderItem = ({ size = "md", text, className }: IHeaderItemProps) => {
  return (
    <button className={`text-gray-800 text-${size} ${className}`}>
      {text}
    </button>
  );
};

export const Header = () => {
  return (
    <header className="fixed w-full  top-0 left-0 right-0 z-50 shadow-sm h-[72px]">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto h-full px-4">
        <div className="flex gap-8">
          <Link to="/" className="mr-24">
            Home
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/info">
            <HeaderItem size={"lg"} text={"티카노란?"} />
          </Link>
          <Link to="/market">
            <HeaderItem size={"lg"} text={"원두 구매하기"} />
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/join">
            <HeaderItem size={"sm"} text={"회원가입"} />
          </Link>
          <HeaderItem size={"sm"} text={"|"} className="text-thin" />
          <Link to="/login">
            <HeaderItem size={"sm"} text={"로그인"} />
          </Link>
          <HeaderItem size={"sm"} text={"|"} className="text-thin" />
          <Link to="/cart">
            <HeaderItem size={"sm"} text={"장바구니"} />
          </Link>
        </div>
      </div>
    </header>
  );
};
