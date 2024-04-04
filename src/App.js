import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import appStore from './utils/redux/appStore';

function App() {
  return (
    <div className='App bg-gradient-to-bl from-slate-600 h-screen'>
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/profile' element={<Profile />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
