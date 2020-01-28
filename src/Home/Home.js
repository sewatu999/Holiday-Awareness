import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import monthsList from '../Months/months.js';

class Home extends Component {
  render() {
    let monthNames = monthsList.map(month => {
      return (
        <div className="monthContainer" key={month}>
          <p>
            <Link to={'/' + month}> {month}</Link>
          </p>
        </div>
      );
    });

    return <div>{monthNames}</div>;
  }
}
export default Home;

{
  /* <h1> Holiday Awareness </h1>
<p>Plan your holidays</p> */
}
// console.log(birdImages);
// return <div>{birdImages}</div>;
// return (
//   <div>

//   </div>
// );

// render() {
//   Months = monthsList.map(month => {
//     return (
//       // <div className="./Months"
//       <div key={month.name}>
//         <p>
//           <Link to={'./Months/' + monthsList.name}>
//             {' '}
//             {monthsList.name} {monthsList.name}
//           </Link>
//           :{' '}
//         </p>
//       </div>
//     );
//     return <div>{'MonthsList'}</div>;
//   });
// }

// console.log('Months');
