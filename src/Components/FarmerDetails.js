import React, { Component } from "react";
import axios from "axios";
import "./farmerDetail.css";
export class FarmerDetails extends Component {
  //prop recieved as name

  constructor() {
    super();
  }
  // componentDidMount= async ()=>{

  //     console.log(res.data);
  //     let data = res.data;
  //    this.setState({
  //         name: data.name,
  //         email: data.email,
  //         mobile: data.mobile
  //    })
  // }
  render() {
    return (
      <div className="farmerDetailDiv container">
        <div className="top">
          <h2>Name : </h2>
          <p className="big">{this.props.data.name}</p>
        </div>

        <div className="bottom em">
          <div className="emailDiv">
            <h3>Email : </h3>
            <p>{this.props.data.email}</p>
          </div>
          <div className="mobileDiv">
            <h3>Mobile : </h3>
            <p>{this.props.data.mobile}</p>
          </div>
        </div>
      </div>
    );
  }
} // can add download option

export default FarmerDetails;
