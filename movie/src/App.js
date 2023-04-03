import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './Styles/global';
import router from './Routes/routing';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
