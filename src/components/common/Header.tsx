import { Link } from "react-router-dom";
// import { userState } from '@/stores/userAtom';
// import { useLocation } from 'react-router-dom';
// import { useRecoilState } from 'recoil';

export const Header = () => {
  // const [user, setUser] = useRecoilState(userState);
  // const { pathname } = useLocation();

  return (
    <header className="fixed w-full  top-0 left-0 right-0 z-50 shadow-sm h-[72px] bg-gray-100">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto h-full px-4">
        <div className="flex gap-8">
          <Link to="/" className="mr-24">
            Home
          </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/grid">Grid</Link>
          <Link to="/sortable">Sortable</Link>
          <Link to="/dnd">Dnd</Link>
        </div>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
    </header>
  );
};
