import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
   

    return (
        <div>
            <NavLink className='signButtn' to="/signin"> Sign In</NavLink>
            <NavLink className='regButtn' to="/registration"> To registration</NavLink>
            <div className='homeCarts'> 
            <h3 className='offers'>Job offers: </h3>
            <h3 className='seekers'>Need to do:</h3></div>
            <div className='workersCards'> </div>
            <div className='seekersCards'></div>
            </div>
            
        
    );
};

export default Home;