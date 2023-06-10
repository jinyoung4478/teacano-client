import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, INIT_USER_STATE } from '@/stores/userAtom';

export function LoginRequire() {
   const [user, setUser] = useRecoilState(userState);
   const location = useLocation();

   useEffect(() => {
      setUser(INIT_USER_STATE);
   }, [location]);

   return user.isLoggedIn ? <Outlet /> : <Navigate to={`/sign-in?redirect=${location.pathname}`} />;
}

export function NotLoginRequire() {
   const user = useRecoilValue(userState);

   return user.isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}
