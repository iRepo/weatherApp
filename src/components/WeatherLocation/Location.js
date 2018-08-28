import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => ( //Object Destructuring en parametro
    //const { city } = props; //Object Destructuring
    //console.log(props);
    //debugger;
    <div className ='locationCont'>
        <h1>{city}</h1>
    </div>
    
)

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;