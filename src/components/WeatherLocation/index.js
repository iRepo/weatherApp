import React from 'react';
//import { Preloader } from 'react-materialize';
import CircularProgress from 'material-ui/CircularProgress';
import WeatherData from './WeatherData';
import Location from './Location';
import './styles.css';
import { PropTypes } from 'prop-types';


const WeatherLocation =  ({ onWeatherLocationClick, city, data }) => (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city={city}/>
            { data ?  <WeatherData data={data}/> : 
            <CircularProgress size={60} thickness={7} />}
        </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};
export default WeatherLocation;