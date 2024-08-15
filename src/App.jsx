import { useState, useRef } from 'react';
import axios from 'axios'
import './App.css'
import WeatherInformations from '../src/components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days';

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key =  "676378ac9b15df41d2540ebd8ea8b3c7"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)

  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite um local aqui.'></input>
      <button onClick={searchCity}>Pesquisar</button>

      
      {weather && <WeatherInformations  weather={weather}/>}
      {weather5Days && <WeatherInformations5Days  weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
