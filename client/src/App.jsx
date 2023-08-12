import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import PageRender from './PageRender';
import Login from './pages/login';
import Home from './pages/home';
import { Notify } from './components/notify/Notify';

const App = () => {
  return (
    <BrowserRouter>
      <Notify />
      <input type='checkbox' id='theme' />
      <div className='App'>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/:page' element={<PageRender />} />
            <Route path='/:page/:id' element={<PageRender />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
