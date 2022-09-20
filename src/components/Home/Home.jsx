import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BgLoader from '../../UI/BgLoader';
import FormRegistration from '../../UI/FormRegistration';
import './Home.css';



const Home = (handleSignIn) => {

// const [bgLoader, setBgLoader] = useState(false);

// const handleBgLoader = () => {
//         if(handleSignIn===true) {
//          setBgLoader(true)
//         }
//       }


    return (
        <div>
            {/* <BgLoader/> */}
            <div className='homeCarts'> 
            <h3 className='offers'>They can do: </h3>
            <h3 className='seekers'>They looking for someone:</h3></div>
            </div>
            
        
    );
};

export default Home;