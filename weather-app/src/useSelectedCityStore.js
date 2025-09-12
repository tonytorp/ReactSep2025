// Zustand storelle oma tiedosto, jonka voi importoida
import { create } from "zustand"

const useSelectedCityStore = create((set) =>({
    city: "Helsinki", // oletuskaupunki
    setCity: (cityName)=>set({city: cityName})
    // Tähän voisi lisätä muita toimintoja, esim. reset city...
}));

export default useSelectedCityStore;