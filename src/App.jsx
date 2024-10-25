import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Cart from './routes/cart';
import Shop from './routes/shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/shop',
      element: <Shop />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]);
  return <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
}

export default App;
