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
        this.setState({isError:false, isSubmit:false, disabled:true})
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

    handleFormChange = e => {
        const {name, value} = e.target;
        this.setState({[name]:value});
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



  



    render() {
        const { name, website,postalCode,phoneNumber,longitude,latitude, isSubmit, isError  } = this.state
        if(isSubmit === true){                        
            return <Redirect to='/dashboard'/>
        } else if (isError === true){            
            alert('Incorrect Values')
        }  else if ((longitude > 180 || longitude < -180) || (latitude > 90 || latitude < -90)) {
            this.setState({
            disabled: true
            })
        } 
       
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