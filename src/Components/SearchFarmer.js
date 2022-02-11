import React, { Component } from 'react';
import "./searchFarmer.css"
import FarmerDetails from './FarmerDetails';
import {Link} from "react-router-dom";
import axios from "axios"
export class SearchFarmer extends Component {
    constructor(){
        super();
        this.state={
            farmerName:"",
            name:"",
            email:"",
            mobile:"",
            hasData: false
        }
    }

    handleChange=(e)=>{
        let name = e.target.value;
        this.setState({
            farmerName: name
        })
    }

    handleClick= async ()=>{
        let res = await axios.get(`/getFarmerDetails?farmer=${this.state.farmerName}`);
        console.log(res.data);
        let data = res.data;
       this.setState({
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            hasData: true
       })  
    }

  render() {
    return <div className='searchFarmerDiv'>
        <h1>Search Farmer</h1>
        <input type="text" value={this.state.farmerName} onChange={this.handleChange}></input>  
        
        <button type="submit" onClick={this.handleClick}>search</button> 

        
        {this.state.hasData && <div className='farmerDetailDiv'>
        <div>
            <h3>Name : </h3>
            <p>{this.name}</p>
        </div>
        <div>
        <h3>Email : </h3>
            <p>{this.email}</p>
        </div>
        <div>
        <h3>Mobile : </h3>
            <p>{this.mobile}</p>
        </div>
    </div>}
       
    </div>;
  }
}

export default SearchFarmer;
