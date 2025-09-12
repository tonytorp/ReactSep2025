import {useState} from 'react'
const CitySelector = ({onChange}) => {
    const[inputValue, setInputValue] = useState("")
    
    const updateCity = () =>{
        // tässä kutsutaan parentin callbackia
        // lifting state up
        onChange(inputValue) 
        // Tyhjennetään input-kenttä
        setInputValue("")
    }

    return(
        <>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={() => updateCity()}>OK</button>
        </>
    )
}

export default CitySelector;