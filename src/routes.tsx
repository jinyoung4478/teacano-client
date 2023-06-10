import { createBrowserRouter } from 'react-router-dom';
import Root from '@/Root';
import { NotLoginRequire } from '@/components/LoginRequire';
import Home from '@/pages/Home';

const routes = createBrowserRouter([
   {
      path: '',
      element: <Root />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            element: <NotLoginRequire />,
         },
      ],
   },
]);

export default routes;
