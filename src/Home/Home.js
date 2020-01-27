import React, { Component } from 'react';
import Holiday from '../Holidays/Holiday';
// import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Months from '../Months/months.js';
// import Index from '../index.js';
// import App from '../App';

class Home extends Component {
  render() {
    function months(Months) {
      return `monthsList`;
    }
    return (
      <div>
        <h1> Holiday Awareness </h1>
        <p>Plan your holidays</p>

        {/* <Months monthsList={this.props.monthsList} /> */}
      </div>
    );
  }
}
export default Home;

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
