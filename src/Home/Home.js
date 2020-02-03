import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import monthsList from '../Months/months.js';

// const numberOfMonths = [' '];
class Home extends Component {
  render() {
    let monthNames = monthsList.map(month => {
      return (
        <p className="monthItem" key={month}>
          <Link to={'/' + month}> {month} </Link>
        </p>
      );
    });
    return <div className="monthContainer">{monthNames}</div>;
  }
}

export default Home;
