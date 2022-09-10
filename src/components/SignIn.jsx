// import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SignIn.css';




const SignIn = () => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState({status: false, errorMessage:''})
const [login, setLogin] = useState(false);
const navigation = useNavigate();


const nahdleName = (e) => {
    setName(e.target.value)
}
const handlePassword = (e) => {
    setPassword(e.target.value)
}


const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
        name,
        password
      };
    localStorage.setItem('token-info', JSON.stringify(userData));
    if (name ==='' || password==='') {
        setLogin(false);
        setError({status: true, errorMessage:'You have to enter all the fields'})
    } else {
        setLogin(true);
        setError({status: false, errorMessage:''})
        setTimeout(() => {navigation('/userHome')}, 1300)
    }
   
}

// const handleLogin = (name, email) => {
//     axios.post('Users/postUsers',  { 
//         Name: name,
//         Email: email
//     })
//     .catch(error => {
//         if (name === '' || email === '') {
//         setError({status: true, errorMessage:'You have to enter all the fields'});
//         setLogin({status: false, loginMessage:''})
//     } else {
//         setError({status: false, errorMessage:''});
//         setLogin({status: true, loginMessage:'Welcome $`{name}`'});
//     }
//      })
    
// }



return (
    <div>
        <div className='signInMessages'>
            {error.status && <h1>{error.errorMessage}</h1>}
            { login && <h1>Hi, {name}! Welcome to your page</h1> }
            {login && <h1> </h1> }
        </div>
        <form className='signInForm'>
            <input
                onChange={nahdleName}
                value={name}
                placeholder='Enter your name'
                autoComplete='username'
            ></input>
            <br/>
            <input
                onChange={handlePassword}
                value={password}
                placeholder='Enter your password'
                type='password'
                autoComplete='on'
            ></input>
            <button 
                onClick = {(e) => handleLogin(e)}
                type='submit'>
                Sign In</button>
            <button
                placeholder='Forgot your details?'
                type='submit'
                >Forgot your details</button>
            </form>
            <div> <NavLink className='regButt' to="/registration"> To registration</NavLink>
                 <NavLink className='homeButton' to="/"> Home</NavLink></div>
        </div>
    );
};

export default SignIn;