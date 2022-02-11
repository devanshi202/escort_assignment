import React, { Component } from 'react';
import axios from "axios"
import './register.css'
import  RegisterDetail  from './RegisterDetail';
import {Link} from "react-router-dom";
export default class Register extends Component {
    constructor(){
        super();
        this.state={
            farmerName: "",
            developerName:"",
            resData:{}
        }
    }
    handleChange1=(e)=>{
        let name = e.target.value;
        this.setState({
            farmerName: name
        })
    }
    handleChange2=(e)=>{
        let name = e.target.value;
        this.setState({
            developerName: name
        })
    }
    handleSubmit= async (e)=>{
        e.preventDefault()
        let obj={
            "farmer": this.state.farmerName,
            "developer": this.state.developerName
        }
        let res=await axios.post("/registerFarmer" , obj);
        
        console.log(res.data);
        this.setState({
            resData:res.data
        })

        window.alert(res.data.message+" for farmer: "+res.data.farmer);

    }
  render() {
    return <div className='registerDiv'>
        
        <h1>Register Farmer</h1>
        <form onSubmit={this.handleSubmit}>
            <input purpose="farmerName" type="text" value={this.state.farmerName} onChange={this.handleChange1}></input>
            <input purpose="developerName" type="text" value={this.state.developerName} onChange={this.handleChange2}></input>
            
            <button type="submit" onClick={this.handleSubmit}>submit</button>
          
        </form>
        
    </div>
  }
}


