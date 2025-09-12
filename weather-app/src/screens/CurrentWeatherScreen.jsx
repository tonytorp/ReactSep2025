import WeatherDataDisplay from "../components/WeatherDataDisplay"
import Header from "../components/Header";
import CitySelector from "../components/CitySelector";
import {useState} from 'react';

const CurrentWeatherScreen = () => {
    const [city, setCity] = useState("Helsinki")

    const cityUpdated= ( newCity ) =>{
        console.log("City vaihdettu ", newCity)
        setCity( newCity )
    }
    return ( 
        <>  
            <Header title={city}></Header>
            <WeatherDataDisplay description="Sunny" temperature ={14} windSpeed={4.5}></WeatherDataDisplay>
            <CitySelector onChange={cityUpdated}></CitySelector>     
        </> 
    )
}

export default CurrentWeatherScreen;