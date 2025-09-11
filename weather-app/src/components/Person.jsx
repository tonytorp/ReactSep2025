// Komponentin voi luoda myös (kuten React -dokumentaation esimerkeissä usein):
// function person() {}
import {useState} from 'react'

// Moderni parametrien/datan välitys object destructuring
const Person = ({name, age }) =>  {
    const[role, setRole] = useState("Developer")
    const[inputValue, setInputValue] = useState("")
    

    const updateRole = () =>{
        setRole(inputValue)
        setInputValue("")
    }

    // React -komponentti sisältää käyttöliittymän sekä
    // siihen liittyvän logiikan. Palauttaa aina käyttöliittymän.
    // Yksi juurielementti, esim. div tai tyhjä fragmentti <>
    // Juurielementin alle komponentin sisältöhierarkia
    return(
        <>
            <h3>Person's data</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={() => updateRole()}>OK</button>
        </>
    )
}

// Lopuksi palautetaan komponentti ulkoa käytettäväksi
export default Person;