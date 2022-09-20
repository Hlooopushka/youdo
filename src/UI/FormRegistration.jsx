import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {LoginStatus} from '../App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
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

const FormRegistration = ({formRegistration, handleRegistration, closeRegistration}) => { 
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const[message, setMessage] = useState({status:false, message:''});
const [submit, setSubmit] = useState(false);
const [error, setError] = useState({status : false, errorMessage: ''}); 
const { userLoging} = useContext(LoginStatus);
const navigation = useNavigate();
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
const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          name,
          email,
          password,
          confirmPassword
        };
    localStorage.setItem('token-info', JSON.stringify(userData));
    if (name ==='' || email ==='' || email.type === 'undefined' || password ==='' || confirmPassword ==='') {
        setError({status: true, errorMessage:'You have to enter all the fields'});
        setTimeout(()=> {setError(false)},1500);
    } else {
    if (password === confirmPassword) {
        setError({status: false, errorMessage:'' });
        setMessage({status: true, message:`${name}, welcome to your page!`})
        setTimeout(()=> {
          userLoging(true);
          handleRegistration();
        },1500);
        navigation('/userHome');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setMessage({status:false, message:''});  
        } 
        else {
          setError({status: true, errorMessage:'Passwords do not match'});
              }
      }
    }

 useEffect(() => {
    if(submit) {

       setTimeout(()=>{setSubmit(false)},2000)
      }
  },[submit])

  return (
    <div>
      <Modal
        hideBackdrop={true}
        open={formRegistration}
        onClose={handleRegistration}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400 }}>
        <div className='messages' >
        {error.status && <h1>{error.errorMessage}</h1>}
          {message.status && <h1>{message.message}</h1> }
            {/* {submit && <h1>Congrats {name}, you've been succesfully registered.</h1>} */}
        </div>
<form> 
 <RedBar />
 <TextField label={'Enter your name'} id="margin-none"
 onChange={handleName}
 value={name}
 autoComplete='username'
 />
<RedBar />
<TextField label={'Enter your email'} id="margin-dense" margin="dense" 
onChange={handleEmail}
value={email}
type='email'
autoComplete='on'
/>
<RedBar />
<TextField label={'Enter your password'} id="margin-dense" margin="dense" 
onChange={handlePassword}
value={password}
type='password'
autoComplete='on'
/>
<RedBar />
<TextField label={'Confirm your password'} id="margin-dense" margin="dense" 
onChange={handleConfirmPassword}
value={confirmPassword}
type='password'
autoComplete='on'
/>
<RedBar />
<Button onClick = {(e) => handleSubmit(e)} variant="contained" size="medium">Register</Button>
<Button onClick = {() => handleRegistration()} variant="contained" size="medium" style={{'marginLeft':'15px'}} >Close</Button>
<RedBar />
 </form>
     </Box>
    </Modal>
    </div>
  )
}
export default FormRegistration;
