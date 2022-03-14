import React from 'react'
import LoginBox from"./Components/Loginbox"
import RegisterBox from "./Components/Registerbox"
import ForgotPassBox from './Components/ForgotPassBox';
import NewAppl from "./Components/NewApplication"
import PreviousApp from "./Components/PreviousApp"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserPage from "./Components/UserPage"
import HomePage from './Components/HomePage';
import AdminPage from './Components/AdminPage';
import AdminPrevious from'./Components/AdminPrevious';
import AdminNewApp from './Components/AdminNewApp';
function App() {


  
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={<LoginBox/>}/>
        <Route  path="/register" element={<RegisterBox />}/>
        <Route  path="/forgotpassword" element={<ForgotPassBox />}/>
        
        <Route  path="/userpage/:id/" element={<UserPage/>}>
          <Route  path="home" element={<HomePage/>}/>
          <Route  path="newApplication" element={<NewAppl/>}/>
          <Route  path="previousApplication" element={<PreviousApp/>}/>
        </Route>

        <Route  path="/adminpage/:id/" element={<AdminPage/>}>
          <Route  path="home" element={<AdminPage/>}/>
          <Route  path="previous" element={<AdminPrevious/>}/>
          <Route  path="new" element={<AdminNewApp/>}/>
        </Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
