import React from 'react';
import { useState } from 'react';
import './SeekerCard.css';


const SeekerCard = () => {
// const [jobTitle, setJobTitle] = useState('');
// const [jobBody, setJobBody] = useState('');
// const [jobDte, setJobDate] = useState(new Date());
// const [jobPrice, setJobPrice] = useState('');
// const [jobContacts, setJobConstacts] = useState('');

// const handleJobTitle = (e) => {
//     setJobTitle(e.target.value);
// }
// const handleJobBody = (e) => {
//     setJobBody(e.target.value);
// }
// const handleJobDate = () => {
//     setJobDate(new Date());
// }
// const handleJobPrice = (e) => {
//     setJobPrice(e.target.value);
// }
// const handleJobContacts = (e) => {
//     setJobConstacts(e.target.value);
// }




    return (
        <div className='seekerCard'>
           <h4 className='wantedWorkers' >All your wanted workers</h4>
           <h4 className='creatJob'>Create new job to do</h4> 
        </div>
    );
};

export default SeekerCard;