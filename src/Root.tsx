import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

function Root() {
   return (
      <>
         <Outlet context={{ darkMode: false }} />
         <ScrollToTop />
      </>
   );
}

export default Root;
