import router from './routes/routing';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/global';
import { Provider } from 'react-redux';
import { store } from './store/@store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
