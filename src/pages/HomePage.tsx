import { Box, Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";

export const HomePage = () => {
  const ctx = useContext(AuthContext);
  return (
    <Box sx={{ p: 3 }}>
      <Navbar />
      {ctx.pokemons.length === 0 ? (
        <Typography variant="h5">Select a type</Typography>
      ) : (
        <Grid container spacing={2}>
          {ctx.pokemons.map((entry: any) => (
            <Grid item key={entry.pokemon.name} xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    entry.pokemon.url.split("/")[6]
                  }.png`}
                  alt={entry.pokemon.name}
                  style={{ width: "100%", maxWidth: 200, marginBottom: 10 }}
                />
                <Typography variant="h6">{entry.pokemon.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
