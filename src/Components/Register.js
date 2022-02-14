import React, { Component } from "react";
import axios from "axios";
import "./register.css";
import RegisterDetail from "./RegisterDetail";
import { Link, Route, Routes } from "react-router-dom";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      farmerName: "",
      developerName: "",
      resData: {},
      hasData: false,
    };
  }
  handleChange1 = (e) => {
    let name = e.target.value;
    this.setState({
      farmerName: name,
    });
  };
  handleChange2 = (e) => {
    let name = e.target.value;
    this.setState({
      developerName: name,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      farmer: this.state.farmerName,
      developer: this.state.developerName,
    };
    let res = await axios.post("/registerFarmer", obj);

    console.log(res.data);
    this.setState({
      resData: res.data,
      hasData: true,
    });

    // window.alert(res.data.message + " for farmer: " + res.data.farmer);
  };
//   componentWillUnmount() {
//     alert("The component is going to be unmounted");
//   }
  render() {
    return (
      <>
        {this.state.hasData ? (
          <RegisterDetail data={this.state.resData} />
        ) : (
          <div className="registerDiv container">
            <h1>Register Farmer</h1>
            <form onSubmit={this.handleSubmit}>
              <input
              placeholder="Farmer's Name" 
                purpose="farmerName"
                type="text"
                value={this.state.farmerName}
                onChange={this.handleChange1}
              ></input>
              <input
              placeholder="Developer's Name" 
                purpose="developerName"
                type="text"
                value={this.state.developerName}
                onChange={this.handleChange2}
              ></input>
              {/* <Link to="/registerD"> */}

              <button className = "glow-on-hover" type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
              {/* </Link> */}
            </form>
          </div>
        )}

        {/* <Routes>

        <Route path="/registerD" element={<RegisterDetail data={this.state.resData}/>}/>
        </Routes> */}
      </>
    );
  }
}
