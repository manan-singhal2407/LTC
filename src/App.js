import React from 'react'
import LoginBox from"./Components/Loginbox"
import RegisterBox from "./Components/Registerbox"
import ForgotPassBox from './Components/ForgotPassBox';
import NewAppl from "./Components/NewApplication"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./Components/HomePage"
function App() {


  
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={<LoginBox/>}/>
        <Route  path="/register" element={<RegisterBox />}/>
        <Route  path="/forgotpassword" element={<ForgotPassBox />}/>
        <Route  path="/userpage/:id" element={<HomePage/>}>
        <Route  path="newApplication" element={<NewAppl/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
