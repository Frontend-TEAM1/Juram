import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Header from '../Layout/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '', element: <Main /> },
      {
        path: '/haha',
        // path: '/:nick_name',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
