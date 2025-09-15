import CitySelector from "../components/CitySelector";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import useSelectedCityStore from "../useSelectedCityStore"; // zustand store

// Miten luon listan/table rowt datan pohjalta?
//  -> favCities.map(...) palauttaa TableRow:n jokaiselle oliolle.
// Miten käsittelen dynaamista dataa?
//  -> Lisää: setFavCities(prev => [...prev, uusi])
//  -> Poista: setFavCities(prev => prev.filter(...))

const FavouriteCitiesScreen = () => {
    const navigate = useNavigate();
    const [favCities, setFavCities] = useState([
        { id: "1", cityName: "Tampere", country: "FI" },
        { id: "2", cityName: "Stockholm", country: "SE" },
        { id: "3", cityName: "Helsinki", country: "FI" },
        { id: "4", cityName: "London", country: "UK" },
    ]);

    const setCity = useSelectedCityStore((state) => state.setCity);

    const makeId = () =>
        (typeof crypto !== "undefined" && crypto.randomUUID)
        ? crypto.randomUUID()
        : String(Date.now()) + Math.random().toString(16).slice(2);

    const addNewCity = (newCityName, country = "FI") => {
        if (!newCityName?.trim()) return;
        const newCity = { id: makeId(), cityName: newCityName.trim(), country };
        // funktionaalinen päivitys = ei “stale state” -riskiä
        setFavCities((prev) => [...prev, newCity]);
    };

    const handleDelete = (id) => {
        setFavCities((prev) => prev.filter((c) => c.id !== id));
    };

    const selectCity = (cityName) => {
        setCity(cityName);
        // tähän voit lisätä navigoinnin esim. sää-sivulle
        navigate("/");
    };

    return (
        <Container maxWidth="md">
        <Box py={3}>
            <Header title="FavouriteCities" />

            <Paper elevation={2} sx={{ mt: 2, overflow: "hidden", borderRadius: 3 }}>
            <TableContainer>
                <Table size="medium" aria-label="suosikkikaupungit">
                <TableHead>
                    <TableRow sx={{ "& th": { fontWeight: 600 } }}>
                    <TableCell>Kaupunki</TableCell>
                    <TableCell align="right">Toiminnot</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {favCities.map((city) => (
                    <TableRow
                        key={city.id ?? city.cityName}
                        hover
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        <Typography variant="body1">
                            {city.cityName} {city.country ? `(${city.country})` : ""}
                        </Typography>
                        </TableCell>
                        <TableCell align="right">
                        <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <Button
                            size="small"
                            variant="outlined"
                            onClick={() => selectCity(city.cityName)}
                            >
                            Valitse
                            </Button>
                            <Button
                            size="small"
                            variant="text"
                            color="error"
                            onClick={() => handleDelete(city.id)}
                            >
                            Poista
                            </Button>
                        </Stack>
                        </TableCell>
                    </TableRow>
                    ))}

                    {favCities.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={2} align="center">
                        <Typography variant="body2" sx={{ py: 2 }}>
                            Ei suosikkikaupunkeja vielä.
                        </Typography>
                        </TableCell>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>

            <Box mt={3}>
            {/* CitySelector kutsuu onChange(newCityName) -> lisää uusi rivi */}
            <CitySelector onChange={addNewCity} />
            </Box>
        </Box>
        </Container>
    );
};

export default FavouriteCitiesScreen;
