import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Registration from './components/Registration';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from './components/SignIn';
// import ReadInfo from './components/ReadInfo';



const App = () => {
 
  return (
    <React.StrictMode> 
      
    <Router> 
    <Layout> 
          <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='registration' element={<Registration/>} />
        <Route path='signin' element={<SignIn/>} />
        {/* <Route path='readInfo' element={<ReadInfo/>} /> */}
        </Routes>
        </Layout>
   </Router>
  
   </React.StrictMode>

  );
}

export default App;

