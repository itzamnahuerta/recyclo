import React, { Component } from 'react';
import { postLocations  } from '../../Services/ApiServices';
import { Redirect  } from 'react-router-dom';

class AddLocation extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            website: '',
            postalCode: '',
            phoneNumber: '',
            longitude: '',
            latitude: '',
            isSubmit : false,
            isError : false,
            disabled: true
        }
    }

    componentDidMount() {
        this.setState({isError:false, isSubmit:false, 
            disabled:true
        })        
    }

    handleCreateLocation = async () => {
        const { name, website,postalCode,phoneNumber,longitude,latitude  } = this.state
        try {
            const resp = await postLocations({
                name, 
                website,
                postalCode,
                phoneNumber,
                longitude,
                latitude
            })
            console.log(resp)
        } catch (error) {
            throw error
        }
    }

    checkLongFunc = () => {
        const { latitude, longitude } = this.state;
        console.log(this.state.latitude)
        // const lat = parseInt(latitude)        
        // const long = parseInt(longitude)
        console.log(longitude, latitude)
        // if(latitude.length = 5){
        // if ((long >= -180 && long <= 180) && (lat >= -90 && lat <= 90)) {
        //     this.setState({
        //         disabled: false
        //     })
        // } else {
        //      this.setState({
        //         disabled: true
        //     })
        // }
    // }
    }

    handleFormChange = e => {
        const { name, value } = e.target;
        console.log(name, value)
        this.setState({ [name]: value });
        // this.checkLongFunc();
        if (((name === 'latitude') && (value >= -90 && value <= 90)) || (name === 'longitude') && (value >= -180 && value <= 180)) {
            this.setState({
                disabled: false
            })
        } else {
            this.setState({
                disabled: true

            })
        }
    }


    
    handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await this.handleCreateLocation()            
            this.setState({
                isSubmit:true                
                
            })
        } catch (error) {
            if(error)this.setState({isError:true})
        }
    }

    


    // else if ((longitude > 180 || longitude < -180) || (latitude > 90 || latitude < -90)) {
    //     this.setState({
    //     disabled: true
    //     })
    // } 
    


  



    render() {
        const { name, website,postalCode,phoneNumber,longitude,latitude, isSubmit, isError  } = this.state
        if(isSubmit === true){                        
            return <Redirect to='/dashboard'/>
        } else if (isError === true){            
            alert('Incorrect Values')
        }  
console.log(this.state.latitude)
       
       
        return (
            <div>
                <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input name="name" value={name}/>
                    <label>Website</label>
                    <input name="website" value={website}/>
                    <label>Postal Code</label>
                    <input name="postalCode" value={postalCode}/>
                    <label>Phone Number</label>
                    <input name="phoneNumber" value={phoneNumber}/>
                    <label>Longitude</label>
                    <input name="longitude" value={longitude}/>
                    <label>Latitude</label>
                    <input name="latitude" value={latitude}/>
                    <button disabled={this.state.disabled} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddLocation;