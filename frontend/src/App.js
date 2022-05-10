import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate,Outlet} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Auth from './Pages/Auth/Auth';
import Activate from './Pages/Activate/Activate';
import Rooms from './Pages/Rooms/Rooms';
import {useSelector} from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <div className="navi">
            <Navigation />
          </div>
          <Routes>
          {/* Guest Routes */}
            <Route path='/' exact element={<GuestRoute />}>
            <Route path="/" exact element={<Home />}></Route>
          </Route>
            <Route path="/authenticate" element={<GuestRoute />}>
              <Route path='/authenticate' element={<Auth/>}></Route>
            </Route>
          {/* Guest Routes */}
          {/* Semi Protected Routes */}
            <Route path="/activate" element={<SemiProtectedRoute />}>
              <Route path='/activate' element={<Activate/>}></Route>
            </Route>
          {/* Semi Protected Routes */}
          {/* Protcted Route */}
            <Route path="/rooms" element={<ProtectedRoute />}>
              <Route path='/rooms' element={<Rooms/>}></Route>
            </Route>
          {/* Protcted Route */}
          {/* <Route path="/register" exact element={<Register/>}></Route>
              <Route path="/login" exact element={<Login/>}></Route> */}
          </Routes>
          </Fragment>
    </BrowserRouter>
    </div>
  );
}

const GuestRoute = () => {
  const { isAuth } = useSelector((state)=>state.auth);
  //used for checking(activate,authenticate...etc) and based on that redirect the user
  return isAuth ? <Navigate to="/rooms" />:<Outlet/>; //outlet renders child elements
};

const SemiProtectedRoute = () => {
  const { isAuth,user } = useSelector((state)=>state.auth);
  return (
    !isAuth ? <Navigate to="/" /> :
      isAuth && !user.activated ? <Outlet /> :<Navigate to="/rooms"/>
  )
}

const ProtectedRoute = () => {
  const { isAuth,user } = useSelector((state)=>state.auth);
  return (
    !isAuth ? <Navigate to="/" /> :
      isAuth && !user.activated ? <Navigate to="/activate"/> : <Outlet/>
  )
}
export default App;
