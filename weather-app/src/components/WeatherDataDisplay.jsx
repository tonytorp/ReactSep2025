// Näkymä, joka näyttää säätilan
const WeatherDataDisplay = ({description, temperature, windSpeed}) => {
    return(
        <>
            <h5>Sää</h5>
            <p>{description}</p>
            <p>{temperature} C</p>
            <p>{windSpeed} m/s</p>
        </>
    )
}

export default WeatherDataDisplay;