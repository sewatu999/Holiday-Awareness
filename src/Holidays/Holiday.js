import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import MonthsList from '../Months/months';

// var monthsList = MonthsList;

class Holiday extends Component {
  render() {
    // function months(Months) {
    //   return `monthsList`;
    // }
    let monthsList = MonthsList.map(item => {
      return (
        <div className="month" key={item.month}>
          <p>
            <Link to={'/App' + item.month}>{item.month}</Link>: {item.month}
          </p>
        </div>
      );
    });
    return <div>{MonthsList}</div>;
    console.log(MonthsList);
  }
}

export default Holiday;
