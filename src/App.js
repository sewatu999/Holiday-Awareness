import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
// import './App.css';
import Index from './index.js';
import Months from './Months/months.js';
import Home from './Home/Home';
import Holiday from './Holidays/Holiday';

// get months on the homePage

// console.log(monthsList);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Month: Months
    };
  }

  selectedMonth = selectedMonth => {
    this.state({ selectedMonth: selectedMonth });
  };
  setMonth = Month => {
    this.setState({ Month: Month });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            {/* <img
              src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
              alt=""
            /> */}
            <h1> Holiday Awareness</h1>
          </Link>
          <Link to="/Holiday"> Holiday </Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Holidays" component={Months} />
            <Route
              render={routerProps => {
                return (
                  <Redirect
                    monthsList={this.state.Months}
                    // setPrice={this.setPrice}
                    // match={this.props.match}
                  />
                );
              }}
            />
            <Route
              path="/Holiday"
              render={() => <Redirect to="/monthsList" />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
//
/* 
      fetch(url)
    .then(response => response.json())
    .then(response => {
      setHolidays(response.data),
      setLastSearch(searchString);
      setSearchString(' ');
    })
    .catch(console.error);
    
    function handleChange(event) {
      setSearchString(event.target.value);
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      // getImages();
      getHolidays(searchString);
      //     } */
//       </div>

// export default App;
