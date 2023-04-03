import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import Main from '../Pages/main';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: '/', element: <Main /> }],
  },
]);

export default router;
