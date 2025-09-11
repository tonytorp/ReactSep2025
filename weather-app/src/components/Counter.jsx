import {useState} from 'react';

const Counter = () => {
    // Todo: toteuta React -komponentti, jossa 2 nappulaa
    // "Increase" ja "Decrease" sekä teksti, jossa laskurimuuttuja
    // Todo: lisää komponentille numeromuuttuja, joka päivittyy nappuloista
    const[counter, setCounter] = useState(0);

    const increment = () => {
        setCounter( counter + 1 )
        console.log("Increment clicked ", counter)
    }
    const decrement = () => {
        setCounter( counter - 1 )
        console.log("Decrement clicked ", counter)
    }
    return(
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}

export default Counter;