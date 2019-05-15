import React, { Component } from 'react';

class HamburgerMenu extends Component {



    render() {
        const { locationList, materialList } = this.props;
        return (
            <div className="sidebar">
                <div className="bar materials">
                {materialList ? materialList.map((material,index) => {
                    return <li 
                                key={material.id} 
                                name={material.name} 
                                value={material.id}
                                onClick={this.props.handleItemClick}>
                            {material.name}
                            </li>
                }) : <h3>No Data</h3>}
                </div>
                <div className="bar locations">
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
                                onClick={this.props.handleItemClick}>
                            {location.name}
                            </li>
                }) : <h3>No Data</h3>}
                </div>
            </div>
        );
    }
}

export default HamburgerMenu;