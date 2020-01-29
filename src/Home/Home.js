import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import monthsList from '../Months/months.js';

const selectedMonth = [' '];
class Home extends Component {
  render() {
    let monthNames = monthsList.map(month => {
      return (
        <div className="monthContainer" key={month}>
          <p>
            <Link to={'/' + month} onClick={selectedMonth}>
              {month}
              {selectedMonth}
            </Link>
          </p>
          <div>
            {/* onClick event => {
              try {
                if (onClick) onClick(event);
              } catch (ex) {
                event.preventDefault();
                throw ex;
              }
            }
           */}
          </div>
        </div>
      );
    });
    return <div>{monthNames}</div>;
  }
}

export default Home;
