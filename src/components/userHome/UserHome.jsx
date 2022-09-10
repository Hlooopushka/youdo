import React from 'react';
import './UserHome.css';
import { useState, useNavigate } from 'react-router-dom';
import SeekerCard from './SeekerCard';


const UserHome = () => {
const navigation = useNavigate();


const handleLogout = () => {
localStorage.removeItem('token-info');
navigation('/')
    }
    return (
        <div>
             <button
        className='logOutButton'
        onClickCapture={handleLogout}
        >
            Log Out
        </button>
        <SeekerCard/>
        </div>
       
    );
};

export default UserHome;