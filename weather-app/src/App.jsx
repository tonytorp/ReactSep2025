import Header from "./components/Header";
import Person from "./components/Person";
import Counter from "./components/Counter";
import CurrentWeatherScreen from "./screens/CurrentWeatherScreen";
import FavouriteCitiesScreen from "./screens/FavouriteCitiesScreen";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {Button} from '@mui/material'

// Luodaan sovelluksen päätason reititys tänne (ks. react router)
const App = () => {
  return(
  
    <BrowserRouter>
      <nav style={{margin: "10px", gap: "10px"}}>
        <Link to="/">
          <Button>Current Weather</Button>
        </Link>
        <Link to="/favCities">
          <Button>Favourite Cities</Button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<CurrentWeatherScreen/>}/>
        <Route path="/favCities" element={<FavouriteCitiesScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
