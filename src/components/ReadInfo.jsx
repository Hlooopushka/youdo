// import { useEffect, useState } from "react";
// import React from 'react';
// import axios from 'axios';


// const ReadInfo = () => {

// const [APIData, setAPIData] = useState([]);
// useEffect(() => {
//     axios.get(`http://localhost:3001/ReadInfo`)
//         .then((response) => {
//             setAPIData(response.data);
//         })
// }, [])
//  <tbody>, <thead> or <tfoot></tfoot> 

//     return (
//         <div>
// <table>
//     <thead>
//         <tr>
//              <th>Name</th>
//              <th>Email</th>
//              <th>Password</th>
//              <th>Confirm password</th>
//              </tr>
//              </thead>
// <tbody>
//   {APIData.map((Ivan, ivanQ, ivanq, ivan1) => {
//      return (
//        <tr>
//           <td>{Ivan}</td>
//            <td>{ivanQ}</td>
//            <td>{ivanq}</td>
//            <td>{ivan1}</td>
//         </tr>
//    )})}
   
// </tbody>




// <thead>
//     <th>Name</th>
//     <th>Email</th>
//     <th>Password</th>
//     <th>Confirm password</th>
// </thead>
// <tbody>
// <td>Ivan</td>
// <td>ivan@ivan.com</td>
// <td itemType='password' >qqq</td>
//  <td itemType='password' >qqq</td>
// </tbody>
// </table>

// </div>




//     );
    
// };


// export default ReadInfo;