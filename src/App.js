import './App.css';
import React from 'react'
import LoginBox from"./Components/Loginbox"
import RegisterBox from "./Components/Registerbox"
import ForgotPassBox from './Components/ForgotPassBox';
import Userpage from "./Components/Userpage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={<LoginBox/>}/>
        <Route  path="/register" element={<RegisterBox />}/>
        <Route  path="/forgotpassword" element={<ForgotPassBox />}/>
        <Route path="/userpage" element={<Userpage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
