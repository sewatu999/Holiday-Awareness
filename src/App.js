import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Index from './index.js';
import MonthsList from './Months/months.js';
import Home from './Home/Home';
import Holiday from './Holidays/Holiday';

var months = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12'
};
// get months on the homePage

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Month: MonthsList,
      selectedMonth: [''],
      Holidays: ['']
    };
  }

  selectedMonth = selectedMonth => {
    this.state({ selectedMonth: selectedMonth });
  };
  setMonth = Month => {
    this.setState({ MonthNames: Month });
  };

  render() {
    return (
      <div>
        <nav>
          <h1> Holiday Awareness </h1>
        </nav>

        <p>Plan your holidays</p>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              name
              render={props => (
                <Home
                  {...props}
                  months={this.state.monthsList}
                  setMonth={this.setMonth}
                />
              )}
            />

            <Route
              exact
              path="/:months"
              render={props => {
                return (
                  <Holiday
                    {...props}
                    Holiday={this.state.Holidays}
                    months={this.state.monthsList}
                    setMonth={this.setMonth}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
