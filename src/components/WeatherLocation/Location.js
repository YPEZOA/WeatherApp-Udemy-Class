import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

                //Destructuring
const Location = ({ city }) => {
  //  const city = props.city

    return (
        <div className="locationCont">
          <h1> {city} </h1>
        </div>)
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;