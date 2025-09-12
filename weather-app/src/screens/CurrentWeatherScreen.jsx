import WeatherDataDisplay from "../components/WeatherDataDisplay"
import Header from "../components/Header";
import CitySelector from "../components/CitySelector";
import {useState} from 'react';

const CurrentWeatherScreen = () => {
    const [city, setCity] = useState("Helsinki")
    const [weatherData, setWeatherData] = useState({
       description: "Sunny",
       temperature: 14,
       windSpeed: 3.4 
    });

    const cityUpdated= ( newCity ) =>{
        console.log("City vaihdettu ", newCity)
        setCity( newCity )
        setWeatherData({
            description: "Cloudy",
            temperature: 13,
            windSpeed: 1 
        });
        fetchWeatherData();
    }

    const fetchWeatherData = async () => {  // async-await ES6+ syntaksi (korvaa aiemman then - catch jne.)
        // Haetaan säätiedot palvelimelta
        try{
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6c433438776b5be4ac86001dc88de74d`;
            const response = await fetch(URL);
            const weatherJson = await response.json();
            console.log( weatherJson );
            setWeatherData({
                description: weatherJson.weather[0].main,
                temperature: weatherJson.main.temp,
                windSpeed: weatherJson.wind.speed
            })
        }
        catch(err){
            console.log(err);
        }
    }

    return ( 
        <>  
            <Header title={city}></Header>
            <WeatherDataDisplay 
                description={weatherData.description} 
                temperature ={weatherData.temperature} 
                windSpeed={weatherData.windSpeed}>
            </WeatherDataDisplay>         
            <CitySelector onChange={cityUpdated}></CitySelector> 
        </> 
    )
}

export default CurrentWeatherScreen;