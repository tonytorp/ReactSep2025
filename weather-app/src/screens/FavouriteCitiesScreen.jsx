import Header from "../components/Header";

const favCities = [
 "Tampere", "Turku", "Helsinki", "Oulu", "Jyväskylä"
];

// Miten luon listan/table rowt tms itemit datan pohjalta?
// Miten käsittelen dynaamisesti dataa

const FavouriteCitiesScreen = () => {
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
                          <td>{city}</td>
                          <td><button>Select</button><button>Delete</button></td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default FavouriteCitiesScreen;