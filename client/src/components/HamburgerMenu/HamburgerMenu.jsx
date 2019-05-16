import React from 'react';
import { Link } from 'react-router-dom'
const HamburgerMenu = (props) => {
    const { locationList, materialList, isMenuClicked } = props;
    const showMenu = isMenuClicked === true ? 'sidebar open' : 'sidebar ';
    return (
        <div className={showMenu}>
            <div  onClick={props.handleMenuOpen}> <span className="xMark"> x</span> </div>

            <div className="bar locations">
            <Link to='/add-location'>Add New Location</Link>
            <h4 className="locations-title"> LOCATIONS </h4>
            {locationList ? locationList.map((location, index) => {
                return <li 
                            key={index} 
                            name={location.name}
                            postcode={location.postal_code}
                            url={location.url}
                            number={location.phone_number}
                            latitude={location.latitude} 
                            longitude={location.longitude}
                            id={location.id}
                            onClick={props.handleItemClick}>
                        {location.name}
                        </li>
            }) : <h3>No Data</h3>}
            </div>
        </div>
    );
};

export default HamburgerMenu;