import React, { Component } from "react";
import "./searchFarmer.css";
import FarmerDetails from "./FarmerDetails";
import { Link } from "react-router-dom";
import axios from "axios";
export class SearchFarmer extends Component {
  constructor() {
    super();
    this.state = {
      farmerName: "",
      data:{},
      hasData: false,
    };
  }

  handleChange = (e) => {
    let name = e.target.value;
    this.setState({
      farmerName: name,
    });
  };

  handleClick = async () => {
    let res = await axios.get(
      `https://v21kqbxf7c.execute-api.us-west-2.amazonaws.com/default/getDetails?farmer=${this.state.farmerName}`
    );
    console.log(res.data);

    this.setState({
      data: res.data,
      hasData: true,
    });
  };

  render() {
    return (
      <>

      

        {this.state.hasData ?  (
         <FarmerDetails data={this.state.data}/>
        ) : (
          <div className="searchFarmerDiv container">
        <h1>Search Farmer</h1>
        <input
          placeholder="Name"
          type="text"
          value={this.state.farmerName}
          onChange={this.handleChange}
        ></input>

        <button className="glow-on-hover" type="submit" onClick={this.handleClick}>
          Search
        </button>
          </div>
        )}
      


      </>
    );
  }
}

export default SearchFarmer;
