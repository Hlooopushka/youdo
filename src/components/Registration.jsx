import React, { useEffect, useState } from 'react';
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
    //  const [users, setUsers] = useState([]);
    //  const [currentId, setCurrentId] = useState('')
        

  
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
    const handleConfirmPassword =(e) => {
        setConfirmPassword(e.target.value);
    }

//     const postData = () => {
//         axios.post('http://localhost:3001/registration')
//         console.log(name);
//         console.log(email);
//         console.log(password);
//         console.log(confirmPassword);
// }



    // const fetchUsers = async () => {
    //     const result = await axios
    //     .get("Users/GetUsers")
    //     .catch(err => {
    //         console.log(`No one to display: ${err}`);
    //     })
    //     setUsers(result.data)
    // }
    // useEffect(() => {
    //     fetchUsers()
    // },[]);

    // const createUser = (name, email, password, confirmPassword) => {
    //     axios
    //     .post("Users/PostUsers", {
    //         'Name': name,
    //         'Email': email,
    //         'Password': password,
    //         'ConfirmPassword': confirmPassword,
    //     })
    //     .then(() => {
    //         fetchUsers()
    //       })
    //       .catch(error => {
    //         if (name ==='' || email ==='' || email.type === 'undefined' || password ==='' || confirmPassword ==='' ) {
    //             setSubmit(false);
    //             setError({status: true, errorMessage:'You have to enter all the fields'});
    //         } else {
    //             if (password === confirmPassword) {
    //               setError({status: false, errorMessage:'' });
    //             setSubmit(true);  
    //             } else {
    //                 setError({status: true, errorMessage:'Passwords do not match'});
    //                 console.log(error);
    //             }
    //         }
            // setError({visible: true, errorMessage:'Can\'t create you hooman'})
            // console.log(error);
    //       });
       
    // };
    
    





    const handleSubmit = (e) => {
        e.preventDefault();
        if (name ==='' || email ==='' || email.type === 'undefined' || password ==='' || confirmPassword ==='') {
            setSubmit(false);
            setError({status: true, errorMessage:'You have to enter all the fields'});
        } else {
            if (password === confirmPassword) {
              setError({status: false, errorMessage:'' });
            setSubmit(true);  
            } else {
                setError({status: true, errorMessage:'Passwords do not match'});
            }
            
        }
    }

    return (

        <div >
            {/* <animateCircles/> */}
            <span className='homeButton' ><NavLink to='/'> Home</NavLink></span>
            <NavLink className='signButt' to="/signin"> Sign In</NavLink>
            <div className='formInputs'> 
            <div>
                <h1>Form registration</h1>
            </div>
            {/* <button onClick={postData} type='submit'>Submit</button>
            <label>Name</label>
            <input placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
            <label>Email</label>
            <input placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <label>Confirm password</label>
            <input placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/> */}


            <div className = 'messages' >
            {error.status && <h1> {error.errorMessage}</h1>}
            {submit && <h1>Congrats {name}, you've been succesfully registered.</h1>}
            </div>
        <form className='formFields' > 
        <input
            onChange={handleName}
            value = {name}
            placeholder = 'Enter your name'
        ></input>
        <input 
            onChange={handleEmail}
            value = {email}
            placeholder = 'Enter your email'
            type='email'
        ></input>
        <input
            onChange={handlePassword}
            value = {password}
            autoComplete="off"
            placeholder = 'Enter your password'
            type='password'
        ></input>
        <input
            onChange={handleConfirmPassword}
            value = {confirmPassword}
            placeholder = 'Confirm your password'
            type='password'
        ></input>  
   
        <button
            onClick = {(e)=> handleSubmit(e)}
            className = 'submitButton'
            type = 'submit'
        >Submit</button>
        </form>
        </div>
        </div>
    );
};

export default Registration;