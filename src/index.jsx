import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserAuth from './UserAuth';
import Todo from './pages/todo/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserAuth />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);