import React, { useContext } from 'react'
import pokemonCtx from "../pokemonCtx"
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material"

const PokemonInfo = () => {
    const { selectedPokemon, setSelectedPokemon } = useContext(pokemonCtx)
    return selectedPokemon && (
        <Card sx={{ height: 350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>{selectedPokemon.name.english}</Typography>
                {Object.keys(selectedPokemon.base).map((key) =>
                    <Typography key={key}>{key} : {selectedPokemon.base[key]}</Typography>
                )}

            </CardContent>
            <CardActions>
                <Button variant='contained' color="secondary" onClick={() => setSelectedPokemon(null)}>dismiss</Button>
            </CardActions>

        </Card>
    )
}
export default PokemonInfo