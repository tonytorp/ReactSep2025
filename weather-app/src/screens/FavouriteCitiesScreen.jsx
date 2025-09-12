import CitySelector from "../components/CitySelector";
import Header from "../components/Header";
import {useState} from "react"
import useSelectedCityStore from "../useSelectedCityStore"  // zustand store


// Miten luon listan/table rowt tms itemit datan pohjalta?
// Miten käsittelen dynaamisesti dataa

const FavouriteCitiesScreen = () => {
    const [favCities, setFavCities] = useState( 
        [
            { id: 1, cityName: "Tampere", country: "FI"}, 
            { id: 2, cityName: "Stockholm", country: "SE"}, 
            { id: 3, cityName: "Helsinki", country: "FI"}, 
            { id: 4, cityName: "London", country: "UK"},       
        ]
    );

    const setCity = useSelectedCityStore(state => state.setCity );

    const addNewCity = (newCityName)=>{
        // Luodaan uusi kaupunki nimeltä newCity
        const newCity = { id: favCities.length, cityName: newCityName, country: "FI"}

        // Jos korvattaisiin olemassa olevan kaupungin nimi (demo)
        // const modifiedCity = { ...newCity, cityName: "Uusi nimi"};
        // console.log(modifiedCity);
        // otetaan olemassa oleva favCities ja lisätään siihen uusi kaupunki 
        // Spread -operaattori ...
        setFavCities( [...favCities, newCity])
        console.log(newCity)
    }

    const handleDelete = (id) => {
        // Mitä tämä vaatii??
        // Moderni listasta tai tietorakenteesta poisto JS:ssä
        // käytetään filter -funktiota ja luodaan uusi lista, jossa kaikki muut paitsi filterin löytämä olio
        // Poistettava jää suodattimen ulkopuolelle ja muut muodostavat uuden listan
        setFavCities( favCities.filter((city) => city.id !== id));
    }
    const selectCity = (cityName) => {
        // Päivitä kaupungin nimi zustand storeen
        // (navigoi säätilanäkymään)
        setCity( cityName )
    }
    return(
        <div>
            <Header title={"FavouriteCities"}></Header>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { favCities.map((city, index) =>(
                        <tr key={index}>
                          <td>{city.cityName}</td>
                          <td>
                            <button onClick={() => selectCity(city.cityName)}>Select</button>
                            <button onClick={() => handleDelete(city.id)}>Delete</button>
                           </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            <CitySelector onChange={addNewCity} ></CitySelector>
            
        </div>
    )
}

export default FavouriteCitiesScreen;