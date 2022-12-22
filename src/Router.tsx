import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Signin';
import Todo from './pages/todo/Todo';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
