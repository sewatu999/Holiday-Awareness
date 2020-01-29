import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Index from './index.js';
import MonthsList from './Months/months.js';
import Home from './Home/Home';
import Holiday from './Holidays/Holiday';

// get months on the homePage

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Month: MonthsList,
      // monthNames: ['']
      selectedMonth: ['']
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
          <p>Plan your holidays</p>
        </nav>
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
                return <Holiday {...props} />;
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

/* <img
  src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
  alt=""
/> */

// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
//

// fetch(url)
//   .then(response => response.json())
//   .then(response => {
//     setMonths(response.data), setLastSearch(searchMonthsList);
//     setMonthsList(' ');
//   })
//   .catch(console.error);
