import React, { useState } from 'react';
import './weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    humidity: '',
    windSpeed: '',
    temperature: '',
    location: 'London'
  });

  const search = async () => {
    const apiKey = 'a79e2526c897f8a112477a70845c738e'; // Replace with your OpenWeatherMap API key

    const inputElement = document.querySelector('.input');

    if (!inputElement.value.trim()) {
      alert('Please enter a city name');
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: data.main.temp,
          location: data.name
        });
      } else {
        console.error('Failed to fetch weather data');
        alert('Failed to fetch weather data. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again later.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={(e) => { e.preventDefault(); search(); }}>
        <i><FontAwesomeIcon icon={faSearch} /></i>
        <div className='section-inputs'>
          <input type='text' name='city' placeholder='Search city here' className='input' />
          <button type="submit" className='input-btn'>Search</button>
        </div>
      </form>

      <div className='section-temperature'>
        <div className='icon'>
          <h1 className='weather-location'>{weatherData.location}</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/1146/1146856.png" alt="" />
        </div>
        <div className="temperatures">
          <h1>{weatherData.temperature} °C</h1>
        </div>
      </div>

      <div className='data'>
        <div className='card-icons'>
          <small>Wind</small>
          <h2 className='weather-wind'>{weatherData.windSpeed} m/s</h2>
        </div>
        <div className='card-icons'>
          <small>Humidity</small>
          <h2 className='humidity-percent'>{weatherData.humidity} %</h2>
        </div>
       
      </div>
    </div>
  );
};

export default Weather;
