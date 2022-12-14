import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//pages
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/offers' element={<Offers />}/>
          <Route path='/profile' element={<SignIn/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
        <Navbar/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
