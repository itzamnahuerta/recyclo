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
                                name={location.latitude} 
                                value={location.longitude}
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