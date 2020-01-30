import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import monthsList from '../Months/months.js';

// const numberOfMonths = [' '];
class Home extends Component {
  render() {
    let monthNames = monthsList.map(month => {
      return (
        <div className="monthContainer" key={month}>
          <p>
            <Link to={'/' + month}> {month} </Link>
          </p>
        </div>
      );
    });
    return <div>{monthNames}</div>;
  }
}

export default Home;
