import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LocationList from "./../components/LocationList";
import * as actions from "./../actions";
import {getCity, getWeatherCities} from './../reducers';
import {connect} from "react-redux";

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                          onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state =>  ({
   citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

/*
CON EL BINDACTIONCREATORS SE HACE EL MISMO COMPORTAMIENTO QUE ESTO

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

ESTAMOS ACOPLANDO LO QUE HAY EN EL CONTAINER CON LAS ACCIONES / CONTRA
*/

export default connect(mapStateToProps, mapDispatchToProps )(LocationListContainer);
