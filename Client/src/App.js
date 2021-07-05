import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" >
        <Login />
      </Route>
      <Route exact path="/home" >
        <NavBar/>
        <Home />
      </Route>
      <Route exact path="/signup" >
        <Signup />
      </Route>
    </BrowserRouter>
  );
}

export default App;
