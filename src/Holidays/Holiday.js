import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import MonthsList from '../Months/months';
import Home from '../Home/Home';

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

class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthName: '',
      holiday: '',
      monthsList: [' ']
    };
    //turn month names into the months number
    //record month thats clicked
    //write if statement that if this month is click our monthNum will be this.
    // take monthNum and dynamically put into my Url fetch.
  }
  componentDidMount() {
    let monthNumber = months[this.props.match.params.months];
    let apiKey = process.env.REACT_APP_HOLIDAY_KEY;

    fetch(
      `https://getfestivo.com/v1/holidays?api_key=${apiKey}&country=US&year=2020&month=${monthNumber}`
    )
      .then(res => res.json())

      .then(response => {
        this.setState({ holidays: response.holidays.holidays });
        console.log(response);
        console.log(this.state.holidays);
      });
  }

  render() {
    console.log(this.state.holidays);
    let holidayList;
    if (this.state.holidays) {
      holidayList = this.state.holidays.map(holiday => {
        return (
          <div key={holiday.name}>
            <p>{holiday.name}</p>
            <p>{holiday.date}</p>
          </div>
        );
      });
    }
    return (
      <div>
        <Link to="/">Back</Link>
        {holidayList}
      </div>
    );
  }
}
export default Holiday;
