import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from  './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import '../styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null,
    }
    console.log("Constructor");
    
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate");
      }

  handleUpdateClick = () => {
    //getUrlWeatherByCity espera el parametro indicado que es city desde su estado
    const api_weather = getUrlWeatherByCity(this.state.city);

    fetch(api_weather).then( resolve => {
        return resolve.json();
    }).then( data => {
      console.log("Resultado del handleUpdateClick");
      const newWeather = transformWeather(data);
      console.log(newWeather);

      this.setState({
        data: newWeather
      })
      
    });
  }

  render() {
    console.log("Render");
    const { city,data } = this.state;

    return (
      <div className="weatherLocationCont">
      <Location city={city}/>
      { data ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
  </div>
    );
  }
};

WeatherLocation.porpTypes = {
  city: PropTypes.string.isRequired,
}
export default WeatherLocation;