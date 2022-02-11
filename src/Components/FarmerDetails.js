import React, { Component } from 'react';
import axios from "axios"
import "./farmerDetail.css"
export class FarmerDetails extends Component { //prop recieved as name

    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            mobile:""
        }
    }
    componentDidMount= async ()=>{
        let res = await axios.get(`/getFarmerDetails?farmer=${this.props.name}`);
        console.log(res.data);
        let data = res.data;
       this.setState({
            name: data.name,
            email: data.email,
            mobile: data.mobile
       })  
    }
  render() {

    return <div className='farmerDetailDiv'>
        <div>
            <h3>Name : </h3>
            <p>{this.name}abc</p>
        </div>
        <div>
        <h3>Email : </h3>
            <p>{this.email}def</p>
        </div>
        <div>
        <h3>Mobile : </h3>
            <p>{this.mobile}ghi</p>
        </div>
    </div>;
  }
}// can add download option 

export default FarmerDetails;
