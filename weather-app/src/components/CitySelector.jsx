import {useState} from 'react'
import {TextField, Button, Stack} from "@mui/material"

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
        <Stack>
            <TextField 
                value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)}>
            </TextField>
            <Button variant="contained" color="primary" onClick={() => updateCity()}>OK</Button>
        </Stack>
    )
}

export default CitySelector;