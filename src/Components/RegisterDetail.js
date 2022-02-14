import React, { Component } from 'react';
// import axios from "axios"
import "./registerDetail.css"
export class RegisterDetail extends Component { //prop recieved as name

    constructor(){
        super();
        this.state={
            obj: {}
        }
    }


  render() {

    return <div className='registerDetailDiv container'>
        
            <p>{this.props.data.message}</p>
            <h2>Name: {this.props.data.farmer}</h2>
       
    </div>;
  }
}// can add download option 

export default RegisterDetail;
