import React from 'react';
import './UserHome.css';
import { useState, useNavigate } from 'react-router-dom';
import SeekerCard from './SeekerCard';
import { useContext } from 'react';
import {LoginStatus} from '../../App';

const UserHome = () => {
const navigation = useNavigate();
const{userLoging} = useContext(LoginStatus);

// const handleLogout = () => {
// localStorage.removeItem('token-info');
// userLoging(false);
// navigation('/')
//     }
    return (
        <div>
             {/* <button
        className='logOutButton'
        onClickCapture={handleLogout}
        >
            Log Out
        </button> */}
        <SeekerCard/>
        </div>
       
    );
};

export default UserHome;