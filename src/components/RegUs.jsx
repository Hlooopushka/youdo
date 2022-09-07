import React, { useState } from 'react';

const RegUs = () => {
    const [user, setUser] = useState({});
    const handleChange = (e) => {
    setUser({ ...user, [e.target.dataset.lable]: e.target.value });
    console.log(user);
      };



    return (
        <div>
            <div>
                <h1>Form registration</h1>
            </div>
            <>
            <input
        data-lable='name'
        value={user.name}
        onChange={handleChange}
      ></input>

      <input
        data-lable='email'
        value={user.email}
        type='email'
        onChange={handleChange}
      ></input>

      <input
        value={user.password}
        data-lable='password'
        onChange={handleChange}
      ></input>
    </>

{/* import React, { useEffect, useState } from 'react';
import './Registration.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";
// import {animateCircles} from './MouseMove'



const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState({status : false, errorMessage: ''}); 
     const [users, setUsers] = useState([]);
     const [currentId, setCurrentId] = useState('')
        

  
    // const handleChange = (e) => {
    //     setUser({ ...user, [e.target.dataset.lable]: e.target.value });
    //     console.log(user);
    //   };

    const handleName = (e) => {
        setName(e.target.value);

    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
      
    }

    // Make correct comparasion of passwords
    // const handleConfirmPassword = (e) => {

    //     if(password.length === confirmPassword.length) {
    //     setError({status: true, errorMessage:'Passwords do not match'});
    //     }
    //     else { 
    //         setError({status: false, errorMessage:'' });
    //     setConfirmPassword(e.target.value);
    //    };
    // }



    const fetchUsers = async () => {
        const result = await axios
        .get("Users/GetUsers")
        .catch(err => {
            console.log(`No one to display: ${err}`);
        })
        setUsers(result.data)
    }

    useEffect(() => {
        fetchUsers()
    },[]);


    const createUser = (id, name, email, password, confirmPassword) => {
        axios
        .post("Users/PostUsers", {
            'id': id,
            'Name': name,
            'Email': email,
            'Password': password,
            'ConfirmPassword': confirmPassword,
            
        })
        .then(() => {
            fetchUsers()
          })
          .catch(error => {
            if (id === '' || name ==='' || email ==='' || email.type === 'undefined' || password ==='' || confirmPassword ==='' ) {
                setSubmit(false);
                setError({status: true, errorMessage:'You have to enter all the fields'});
            } else {
                if (password === confirmPassword) {
                  setError({status: false, errorMessage:'' });
                setSubmit(true);  
                } else {
                    setError({status: true, errorMessage:'Passwords do not match'});
                    console.log(error);
                }
            }
            // setError({visible: true, errorMessage:'Can\'t create you hooman'})
            // console.log(error);
          });
       
    };
    
    





    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (name ==='' || email ==='' || password ==='' || confirmPassword ==='') {
    //         setSubmit(false);
    //         setError({status: true, errorMessage:'You have to enter all the fields'});
    //     } else {
    //         if (password === confirmPassword) {
    //           setError({status: false, errorMessage:'' });
    //         setSubmit(true);  
    //         } else {
    //             setError({status: true, errorMessage:'Passwords do not match'});
    //         }
            
    //     }
    // }

    return (

        <div >
            {/* <animateCircles/> */}
            <span className='homeButton' ><NavLink to='/'> Home</NavLink></span>
            <div className='formInputs'> 
            <div>
                <h1>Form registration</h1>
            </div>
            <div className = 'messages' >
            {error.status && <h1> {error.errorMessage}</h1>}
            {submit && <h1>Congrats {name}, you've been succesfully registered.</h1>}
            </div>
        <form className='formFields' > 
        <input
            onChange={handleName}
            value = {name}
            placeholder = 'Enter your name'
            // data-lable = 'name'
            // value = {user.name}
            // onChange = {handleChange}
        ></input>
        <input 
            onChange={handleEmail}
            value = {email}
            placeholder = 'Enter your email'
            type='email'
            
            // data-lable = 'email'
            // value = {user.email}
            // onChange = {handleChange}
        ></input>
        <input
            onChange={handlePassword}
            value = {password}
            autoComplete="on"
            placeholder = 'Enter your password'
            type='password'
            // data-lable ='password'
            // value = {user.password}
            // onChange = {handleChange}
        ></input>
        <input
            onChange={setConfirmPassword}
            value = {confirmPassword}
            autoComplete="on"
            placeholder = 'Confirm your password'
            type='password'
            
            // data-lable = 'checkingPassword'
            // value = {user.checkingPassword}
            // onChange = {handleChange}
        ></input>  



        {/* Make a controlled element */}
        <button
            onClick = {(e)=> createUser(e)}
            className = 'submitButton'
            type = 'submit'
        >Submit</button>
        </form>
        </div>
        </div>
    );
};

export default Registration; */}


        </div>
    );
};

export default RegUs;