import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormRegistration from './FormRegistration';
import SignIn from '../components/SignIn';  
import { useState } from 'react';
import { useContext } from 'react';
import {LoginStatus} from '../App';
import { useNavigate } from 'react-router-dom';
 

const ButtonAppBar = () => {
const [openRegistration, setOpenRegistration] = useState(false);
const [openSignIn,setOpenSignIn] = useState(false);
const {login, userLoging } = useContext(LoginStatus);
const navigation = useNavigate();

const closeSignIn=()=> {
setOpenSignIn(false);
}
const handleSignIn = () => {
  if(!login) {
    setOpenSignIn(true)
  } else {
    setOpenSignIn(false)
    userLoging(false);
    navigation('/')
  }
}

const handleRegistration = () => {

    setOpenRegistration((isRegistrationOpen) => {
      return !isRegistrationOpen
    })

}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UDoo
          </Typography>

           <Button color="inherit"
            onClick={()=> handleRegistration()}
            style={{'display': `${login ? 'none': 'inline'}`}}
          > Registration</Button> 
          <FormRegistration formRegistration={openRegistration} handleRegistration={handleRegistration} />

          <Button color="inherit"
            onClick={()=>handleSignIn()}
          >{login ?'Logout': 'Login'}</Button>

          <SignIn signInForm={openSignIn} handleSignin={handleSignIn} closeSignIn={closeSignIn}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;