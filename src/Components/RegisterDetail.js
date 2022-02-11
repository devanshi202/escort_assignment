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

    return <div className='registerDetailDiv'>
        
            <h3>{this.props.data.farmer}</h3>
            <p>{this.props.data.message}</p>
       
    </div>;
  }
}// can add download option 

export default RegisterDetail;
