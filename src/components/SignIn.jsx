// import axios from 'axios';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import {LoginStatus} from '../App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-60%, -40%)',
    width: 400,
    border: '2px solid #3f51b5',
    boxShadow: 70,
    pt: 22,
    px: 14,
    pb: 23,

  };
  function RedBar() {
  return (
    <Box
    sx={{
    height: 20,
    backgroundColor: (theme) =>
    theme.palette.mode === 'light'
    ? 'rgba(255, 0, 0, 0.1)'
    : 'rgb(255 132 132 / 25%)',
        }}
      />
    );
  }

const SignIn = ({signInForm, handleSignin, closeSignIn}) => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState({status: false, errorMessage:''});
const[message, setMessage] = useState({status:false, message:''});
const { userLoging } = useContext(LoginStatus);
const navigation = useNavigate();
const nahdleName = (e) => {
    setName(e.target.value)
}
const handlePassword = (e) => {
    setPassword(e.target.value)
}
const handleLoging = (e) => {
    e.preventDefault();
    const userData = {
        name,
        password
      };
    localStorage.setItem('token-info', JSON.stringify(userData));
    if (name ==='' || password==='') {
        userLoging(false);
        setError({status: true, errorMessage:'You have to enter all the fields'})
        setTimeout(()=> {setError(false)},1500);
    } else {
        setError({status: false, errorMessage:''});
        setMessage({status:true, message:`${name}, welcome to you page`})
        setTimeout(()=> {userLoging(true);closeSignIn()},1500);
        navigation('/userHome');
        setName('');
        setPassword('');
        setMessage({status:false, message:''});
    }
}


return (
    <div>
<Modal hideBackdrop={true}
 open={signInForm}
 onClose={handleSignin}
 aria-labelledby="parent-modal-title"
 aria-describedby="parent-modal-description"> 
<Box sx={{ ...style, width: 340 }}>
<div className='signInMessages'>
  {error.status && <h1>{error.errorMessage}</h1>}
  {message.status && <h1>{message.message}</h1> }
</div>
<RedBar />
<TextField label={'Enter your name'} id="margin-none"
onChange={nahdleName}
value={name}
autoComplete='username'
/>
<RedBar />
<TextField label={'Enter your password'} id="margin-dense" margin="dense" 
onChange={handlePassword}
value={password}
type='password'
autoComplete='on'
/>
<RedBar />
<Button onClick = {(e) => handleLoging(e)} variant="contained" size="medium">
  Login</Button>
<Button onClick = {(e) => closeSignIn(e)} variant="contained" size="medium" style={{'marginLeft':'15px'}} >
  Close</Button>
<RedBar />
<Stack direction="row" spacing={1}>
<Button size="small" variant="outlined" endIcon={<SendIcon />} style={{'marginTop':'5px'}} >
  Forgot your details</Button>
</Stack>
</Box>
</Modal>
</div>
);
};

export default SignIn;