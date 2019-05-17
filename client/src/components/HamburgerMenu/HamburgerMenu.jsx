import React from 'react';
import { Link } from 'react-router-dom'
const HamburgerMenu = (props) => {
    const { locationList, materialList, isMenuClicked } = props;
    const showMenu = isMenuClicked === true ? 'sidebar open' : 'sidebar ';

    const getData = (e) => {
        props.getDataProp(e)
        props.handleItemClick(e)
    }

    return (
        <div className={showMenu}>
            <div  onClick={props.handleMenuOpen}> <span className="xMark"> x</span> </div>
            <div className="bar materials">
            <span className="materials-title"> MATERIALS </span>
            {materialList ? materialList.map((material, index) => {
                return <li key={index} data={JSON.stringify(material.locations)} onClick={(e)=> props.getDataProp(e)}>{material.name}</li>
                }): <h3>No Data</h3>}
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
                            onClick={getData}>
                        {location.name}
                        </li>
            }) : <h3>No Data</h3>}
            </div>
        </div>
    </div>
    );
};

export default HamburgerMenu;