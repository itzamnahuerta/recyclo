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
            longitude: 0,
            latitude: 0,
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
        const { name, website, postalCode,phoneNumber,longitude,latitude  } = this.state
        try {
            const resp = await postLocations({
                name, 
                website,
                postalCode,
                phoneNumber,
                longitude,
                latitude
            })
        } catch (error) {
            throw error
        }
    }
    // 
    // Which handle change are we using?
    // 
    handleFormChange = e => {
        console.log(this.checkLongFunc())
        const {name, value} = e.target;
        console.log(name, value)
        this.setState({[name]:value});
        
        // this.checkLongFunc();
        e.preventDefault()
        console.log(this.checkLongFunc())
    }




    checkLongFunc = async () => {
        const { latitude, longitude } = this.state;
        const lat = latitude
        const long = longitude     
        const latVal = (lat >= -90 && lat <= 90) && lat !== '' ? true : false
        const longVal = (long >= -180 && long <= 180) && long !== '' ? true : false
        const result = !(latVal && longVal)       
            await this.setState({
                disabled: result
            })
    }

    handleFormChange = async (e) => {
        const { name, value } = e.target;    
        await this.setState({ [name]: value });
        await this.checkLongFunc();
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
        }  

        return (
            <div className="add-location">
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
                    <input name="longitude" value={longitude} type="number"/>
                    <label>Latitude</label>
                    <input name="latitude" value={latitude} type="number"/>
                    <button disabled={this.state.disabled} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddLocation;