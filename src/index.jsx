import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Todo from './Todo';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
