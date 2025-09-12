import WeatherDataDisplay from "../components/WeatherDataDisplay"
import Header from "../components/Header";
import CitySelector from "../components/CitySelector";
import {useState, useEffect} from 'react';


const CurrentWeatherScreen = () => {
    const [city, setCity] = useState("Helsinki");
    const [fetchingData, setFetchingData] = useState(false)
    const [weatherData, setWeatherData] = useState({
       description: "Sunny",
       temperature: 14,
       windSpeed: 3.4 
    });

    // [] sisään laitetaan listana riippuvuudet. Jos riippuvuus muuttuu, suoritetaan useEffect. 
    // Jos [] tyhjä, suoritetaan vain ensimmäisen renderöinnin jälkeen
    useEffect( () => {
        console.log("Renderöinti")
        fetchWeatherData();
    }, [city]);

    const fetchWeatherData = async () => {  // async-await ES6+ syntaksi (korvaa aiemman then - catch jne.)
        // Haetaan säätiedot palvelimelta
        try{
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6c433438776b5be4ac86001dc88de74d`;
            setFetchingData(true)
            // keinotekoinen viive 2s
            await new Promise((resolve)=>setTimeout(resolve,1500))
            const response = await fetch(URL);
            const weatherJson = await response.json();
            console.log( weatherJson );
            setFetchingData(false)
            setWeatherData({
                // ? on ES2020 optional chaining -operaattori, jos ei dataa ole, palautuu undefined (ei poikkeusta)
                description: weatherJson.weather?.[0]?.main,
                temperature: weatherJson.main?.temp,
                windSpeed: weatherJson.wind?.speed
            })
        }
        catch(err){
            console.log(err);
            // navigator.onLine voi testata, onko selain verkossa (true on, false ei)
        }
    }

    // Todo: Conditional Rendering
    if( fetchingData ){
        return(
            <>
                <Header title={city}></Header>
                <br/><br/><br/>
                <h2>Ladataan säätietoja...</h2>
            </>
            
        )
    }
    return ( 
        <>  
            <Header title={city}></Header>
            <WeatherDataDisplay 
                description={weatherData.description} 
                temperature ={weatherData.temperature} 
                windSpeed={weatherData.windSpeed}>
            </WeatherDataDisplay>         
            <CitySelector onChange={setCity}></CitySelector> 
        </> 
    )
}

export default CurrentWeatherScreen;