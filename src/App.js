import './App.css';
import React from 'react'
import Navbar from './Components/nav';
import LoginBox from"./Components/Loginbox"
import RegisterBox from "./Components/Registerbox"
import './Components/NavbarElements.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<LoginBox/>}/>
        <Route  path="/register" element={<RegisterBox />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
