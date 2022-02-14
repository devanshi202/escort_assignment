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
        <Link to="/register" style={{ textDecoration: 'none' }}>

        <button className='glow-on-hover' onClick={this.handleClick}>Register Farmers</button>
        </Link>
        <Link to="/search" style={{ textDecoration: 'none' }}>

        <button className='glow-on-hover' onClick={this.handleClick}>Search Farmers</button>
        </Link>
        <Link to="/queries" style={{ textDecoration: 'none' }}>

        <button  className='glow-on-hover' onClick={this.handleClick}>List Queries</button>
        </Link>

        <Link to="/weather" style={{ textDecoration: 'none' }}>

        <button className='glow-on-hover' onClick={this.handleClick}>Check Weather</button>
        </Link>
    </div>;
  }
}

export default Home;
