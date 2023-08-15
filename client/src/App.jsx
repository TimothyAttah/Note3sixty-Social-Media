import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageRender from './PageRender';
import Login from './pages/login';
import Home from './pages/home';
import { Alert } from './components/alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshToken } from './redux/actions/authAction';
import { Header } from './components/Header';

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Alert />
      <input type='checkbox' id='theme' />
      <div className='App'>
        <div className='main'>
          {auth.token && <Header />}
          <Routes>
            <Route path='/' element={auth.token ? <Home /> : <Login />} />
            <Route path='/:page' element={<PageRender />} />
            <Route path='/:page/:id' element={<PageRender />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
