import { createBrowserRouter } from 'react-router-dom';
import CreatePage from '../pages/Create';
import HomePage from '../pages/Home';
import ErrorPage from '../pages/Not-Found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create',
    element: <CreatePage />,
  },
]);

export default router;
