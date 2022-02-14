import React, { Component } from 'react'
import "./weather.css"
import axios from "axios"
export class Weather extends Component {

    constructor(){
        super();
        this.state={
            data:{},
            location:"",
        }
        // this.handlePress = this.handlePress.bind(this);
    }

     handlePress=async (e)=>{
        if(e.key==="Enter"){
            console.log(this.state.location);
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=398e29d370ef94689e7127410fe305c5`)
        console.log(res.data);
        this.setState({
            data: res.data
        })
    }
    }

  render() {
      let data = this.state.data;
    return (
        <div className='weatherApp'>
            
      <div className='containerWeather'>
      <div className='search'>
                <input type="text" onKeyPress={this.handlePress} onChange={(e)=>this.setState({location: e.target.value})} className='location' placeholder='Location..'></input>
            </div>
          <div className='top'>
            <div className='location'>
                <p className='size'>{data.name}</p>
            </div>
            <div className='temp'>
                {data.main ? <h1>{data.main.temp}°F</h1> : null}
            </div>
            <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          <div className='bottom'>
          <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like}°F</p> : null}
                
                <p>feels like</p>
            </div>
            <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                
                <p>Humidity</p>
            </div>
            <div className='wind_speed'>
                {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
                
                <p>wind speed</p>
            </div>

          </div>
      </div>
        </div>
    )
  }
}

export default Weather