import {useState} from 'react'
const CitySelector = () => {
    const[city, setCity] = useState("Helsinki")
        const[inputValue, setInputValue] = useState("")
    
        const updateCity = () =>{
            setCity(inputValue)
            console.log(city)
            // Todo: Lähetä tilatieto ylöspäin pääkäyttöliittymälle (CurrentWeatherScreen)
            // joka hakee uudet säätiedot
        }

        return(
            <>
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
                <button onClick={() => updateCity()}>OK</button>
            </>
        )
}

export default CitySelector;