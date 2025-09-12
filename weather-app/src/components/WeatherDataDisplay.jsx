import {Typography, Card} from "@mui/material"

// Näkymä, joka näyttää säätilan
const WeatherDataDisplay = ({description, temperature, windSpeed}) => {
    return(
        <Card sx={{ mt: 2 }}>
            <Typography variant="h4">Sää</Typography>
            <Typography variant="h5">{description}</Typography>
            <Typography variant="h5">{temperature} C</Typography>
            <Typography variant="h5">{windSpeed} m/s</Typography>
        </Card>
    )
}

export default WeatherDataDisplay;