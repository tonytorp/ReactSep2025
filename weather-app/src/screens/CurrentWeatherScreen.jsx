import WeatherDataDisplay from "../components/WeatherDataDisplay"
import Header from "../components/Header";
import CitySelector from "../components/CitySelector";

const CurrentWeatherScreen = () => {
    return (
        <div>
            <Header title="Helsinki"></Header>
            <WeatherDataDisplay description="Sunny" temperature ={14} windSpeed={4.5}></WeatherDataDisplay>
            <CitySelector></CitySelector>
        </div>
    )
}

export default CurrentWeatherScreen;