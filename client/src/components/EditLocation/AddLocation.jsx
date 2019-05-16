import React, { Component } from 'react';
import { postLocations, getGeoCode  } from '../../Services/ApiServices';
import { Redirect,Link  } from 'react-router-dom';

class AddLocation extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            website: '',
            postalCode: '',
            phoneNumber: '',
            address: '',
            city: '',
            state: '',
            isSubmit : false,
            isError : false,
            disabled: true,
            longitude: '',
            latitude: ''
        }
    }

    componentDidMount() {
        this.setState({isError:false, isSubmit:false, 
            disabled:true
        })        
    }

    handleCreateLocation = async () => {
        console.log('wokring')
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
            return resp
        } catch (error) {
            throw error
        }
    }

    handleFormChange = e => {
        console.log(this.checkLongFunc())
        const {name, value} = e.target;
        console.log(name, value)
        this.setState({[name]:value});
        
        // this.checkLongFunc();
        e.preventDefault()
    }

    handleFormChange = async (e) => {
        const { name, value } = e.target;    
        await this.setState({ [name]: value });
    }

    handleFormSubmit = async (e) => {
        const {name,address,city,state} = this.state
        e.preventDefault();
        try {
            const resp = await getGeoCode(address,city,state)
            // console.log(resp.results)
            const results = resp.results
            console.log('resultssss', results[0].geometry.location)
            
            await this.setState({
                longitude: results[0].geometry.location.lng,
                latitude: results[0].geometry.location.lat,
                isSubmit:true                
            })
            await this.handleCreateLocation()
            return resp
        } catch (error) {
            if(error)this.setState({isError:true})
        }
    }
    
    render() {
        const { name, website,postalCode,phoneNumber, address, city, state, isSubmit, isError  } = this.state
        
        if(isSubmit === true){ 
            return <Redirect to='/dashboard'/>
        } else if (isError === true){            
            alert('Incorrect Values')
        }  

        return (
            <div>
                <Link to='/dashboard'>Back</Link>
                <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input name="name" value={name}/>
                    <label>Website</label>
                    <input name="website" value={website}/>
                    <label>Postal Code</label>
                    <input name="postalCode" value={postalCode}/>
                    <label>Phone Number</label>
                    <input name="phoneNumber" value={phoneNumber}/>
                    <label>Address</label>
                    <input name="address" value={address} type="text"/>
                    <label>City</label>
                    <input name="city" value={city} type="text"/>
                    <label>State</label>
                    <input name="state" value={state} type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddLocation;