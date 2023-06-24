import { Link } from 'react-router-dom';
// import { userState } from '@/stores/userAtom';
// import { useLocation } from 'react-router-dom';
// import { useRecoilState } from 'recoil';

export function Header() {
   // const [user, setUser] = useRecoilState(userState);
   // const { pathname } = useLocation();

   return (
      <header className="fixed w-full  top-0 left-0 right-0 z-50 shadow-sm h-[72px] bg-gray-100">
         <div className="flex items-center justify-between max-w-[1440px] mx-auto h-full px-4">
            <Link to="/">Home</Link>
            <Link to="/login">
               <button>로그인</button>
            </Link>
         </div>
      </header>
   );
}
