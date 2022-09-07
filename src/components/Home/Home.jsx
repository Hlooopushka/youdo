import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
   

    return (
        <div>
            <NavLink className='signButtn' to="/signin"> Sign In</NavLink>
            <NavLink className='regButtn' to="/registration"> To registration</NavLink>
        </div>
    );
};

export default Home;