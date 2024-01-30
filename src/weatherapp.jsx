import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import "./weatherapp.css"


const WeatherApp = () => {
  
  const search = async () => {

    let  api_key = "a79e2526c897f8a112477a70845c738e";
        
    const element = document.getElementsByClassName("input")
    if(element[0].value==="")
    {
       return 0;
    }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units&Metric&appid=${api_key}`
 
  let response = await fetch(url);
  let data = response.json();
  const humidity = document.getElementsByClassName("humidity-percent")
  const wind = document.getElementsByClassName("weather-wind")
  const temperature = document.getElementsByClassName("weather-temp")
  const location = document.getElementsByClassName("weather-location")

  humidity[0].innerHTML = data.main.humidity;
  wind[0].innerHTML = data.wind.speed;
  temperature[0].innerHTML = data.main.temp;
  location[0].innerHTML = data.name;

}

return (
 
     <div className="container">
          <div className='section-inputs'>
             <input type='text' name='city' placeholder='Enter City here' className='input'
             />
             
             <button className='input-btn' onClick={()=>{search()}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            
          </div>

          <div className='section-temperature'>
             <div className='icon'>
             <h3 className='weather-location'>London</h3>
              <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
              alt=""/>
              <h3>Cloudy</h3>
             </div>
             <div className="temperatures">
              <h1 className='weather-temp'>32 °C</h1>
             </div>
          </div>
          <div className='data'>
          <div className='card-icons'>
          {/* <FontAwesomeIcon icon={faArrowDown} /> */}
          <small>min</small>
          </div>
          <h2 className='weather-wind'>32 °C</h2>
      </div>
      <div className='data'>
          <div className='card-icons'>
          {/* <FontAwesomeIcon icon={faArrowDown} /> */}
          <small>min</small>
          </div>
          <h2 className='humidity-percent'>32 °C</h2>
      </div>
     
    </div>
  
);
}

export default WeatherApp
