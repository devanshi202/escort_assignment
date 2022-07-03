import React, { Component } from 'react';
import "./Home.css";

import {Link} from "react-router-dom";
export class Home extends Component {
    
    

  render() {
    return <div className='homePageDiv'>
        <Link to="/register" style={{ textDecoration: 'none' }}>

        <button className='glow-on-hover'>Register Farmers</button>
        </Link>
        <Link to="/search" style={{ textDecoration: 'none' }}>

        <button className='glow-on-hover'>Search Farmers</button>
        </Link>
        <Link to="/queries" style={{ textDecoration: 'none' }}>

        <button  className='glow-on-hover'>List Queries</button>
        </Link>

        <Link to="/weather" style={{ textDecoration: 'none' }}>

        <button className='glow-on-hover'>Check Weather</button>
        </Link>
    </div>;
  }
}

export default Home;
