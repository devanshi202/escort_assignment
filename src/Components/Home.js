import React, { Component } from 'react';
import "./Home.css";

import {Link} from "react-router-dom";
export class Home extends Component {
    constructor(){
        super();
        this.state={
          clicked: false
        }
    }

    handleClick=()=>{
      if(this.state.clicked==true){
        
      }else{

      }
    }

  render() {
    return <div className='homePageDiv'>
        <Link to="/register">

        <button className='register' onClick={this.handleClick}>Register Farmers</button>
        </Link>
        <Link to="/search">

        <button onClick={this.handleClick}>Search Farmers</button>
        </Link>
        <Link to="/queries">

        <button onClick={this.handleClick}>List Queries</button>
        </Link>
        <button onClick={this.handleClick}>Check Weather</button>
    </div>;
  }
}

export default Home;
