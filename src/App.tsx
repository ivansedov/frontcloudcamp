import { RouterProvider } from 'react-router-dom';
import './index.scss';
import router from './routes/root';

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
