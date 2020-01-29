import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import MonthsList from '../Months/months';
import Home from '../Home/Home';

var monthsList = MonthsList;
var monthNames = monthsList;
var output = output;

class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthNum: '',
      monthName: '',
      Holiday: Date,
      monthsList: [' ']
      // month: this.props.match.params.holidays
    };
  }
  //turn month names into the months number
  //record month thats clicked
  //write if statement that if this month is click our monthNum will be this.
  // take monthNum and dynamically put into my Url fetch.
  componentDidMount() {
    function getMonthFromString(monthsList) {
      return new Date(Date.parse(monthsList + ' 1,2020')).getMonth() + 1;
    }

    fetch(
      'https://getfestivo.com/v1/holidays?api_key=f34e3961-f0c5-4b62-9c5b-fdb9a820f926&country=US&year2020&month${} '
      //+ this.props.match.params.monthsNumber
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ Holiday: data.Holiday.Holiday });
        console.log(this.state.month.Holiday);

        // let output = '<p>Holidays</p>';
        // data.forEach(function(month) {
        //   output += `
        //     <ul>
        //     <li>holidays ${month.holidays}</li>
        //     <li>dates: ${month.dates}</li>
        //     <li>name: ${month.names}</li>
        //     </ul>`;
        // });
        // document.getElementById('output').innerHTML = output;
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <div>{'hello world'}</div>
      </div>
    );
  }
}
export default Holiday;

// function handleChange(event) {
//   setMonth(event.target.value);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   getHolidays(monthsList);
// }
