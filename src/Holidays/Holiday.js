import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import MonthsList from '../Months/months';
import Home from '../Home/Home';

var monthsList = MonthsList;

class Holiday extends Component {
  render() {
    const { name } = this.props.match.month;

    const selectedMonth = this.props.monthsList.find(
      months => months.name === monthsList.name
    );
    return (
      <div>
        <h2>
          {selectedMonth.months} {selectedMonth.name}
        </h2>
        <ul>
          <li>Name: {selectedMonth.monthsList}</li>
          <li>Change: {selectedMonth.name}</li>
          <link to="/HomePage:months">ShowPage</link>;
          <button>Read More{selectedMonth.homepage}</button>
        </ul>
      </div>
    );
  }
}
console.log(monthsList);
export default Holiday;
