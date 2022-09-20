import './App.css';
import React, { useState, createContext } from 'react';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SignIn from './components/SignIn';
import UserHome from './components/userHome/UserHome';
import FormRegistration from './UI/FormRegistration';
// import ReadInfo from './components/ReadInfo';
export const LoginStatus = createContext();



const App = () => {
 
const [login, setLogin] = useState(false);

const userLoging = (value) => {
setLogin(value);
}



  return (
    <React.StrictMode> 
      <LoginStatus.Provider value={{login, userLoging}}> 
    <Router> 
    <Layout> 
          <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='formregistration' element={<FormRegistration/>} />
        {/* <Route path='signin' element={<SignIn/>} /> */}
        <Route path='userHome' element={<UserHome/>}/>
    {/* <Route path='readInfo' element={<ReadInfo/>} /> */}
        </Routes>
        </Layout>
   </Router>
   </LoginStatus.Provider>
   </React.StrictMode>
    
  );
}

export default App;

