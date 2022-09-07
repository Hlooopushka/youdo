import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';




const SignIn = () => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');

const nahdleName = (e) => {
    setName(e.target.value)
}
const handlePassword = (e) => {
    setPassword(e.target.value)
}



    return (
        <div>
            <form>
                <input
                    onChange={nahdleName}
                    value={name}
                    placeholder='Enter your name'
                ></input>
                <br/>
                <input
                    onChange={handlePassword}
                    value={password}
                    placeholder='Enter your password'
                    type='password'
                ></input>
                <button
                placeholder='Forgot your details?'
                type='submit'
                >Recover your details</button>
            </form>
            <div> <NavLink className='regButt' to="/registration"> To registration</NavLink>
                 <NavLink className='homeButton' to="/"> Home</NavLink></div>
        </div>
    );
};

export default SignIn;