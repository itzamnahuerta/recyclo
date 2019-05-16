import React from 'react';

const HamburgerMenu = (props) => {
    const { locationList, materialList, isMenuClicked } = props;
    const showMenu = isMenuClicked === true ? 'sidebar open' : 'sidebar ';

    return (
        <div className={showMenu}>
            <div  onClick={props.handleMenuOpen}> <span className="xMark"> x</span> </div>
            <div className="bar materials">
            <span className="materials-title"> MATERIALS </span>
            {materialList ? materialList.map((material, index) => {
                return <li 
                            key={material.id} 
                            name={material.name} 
                            value={material.id}
                            onClick={props.handleItemClick}>
                        {material.name}
                        </li>
            }) : <h3>No Data</h3>}
            </div>
            <div className="bar locations">
            <span className="locations-title"> LOCATIONS </span>
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