import React, { useContext } from 'react'
import pokemonCtx from '../pokemonCtx'
import { TextField } from '@mui/material'
const PokemonFilter = () => {
    const { setFilter } = useContext(pokemonCtx)
    return (
        <TextField variant='filled' label="Find Pokemon..." onChange={(e) => setFilter(e.target.value)}></TextField>
    )
}
export default PokemonFilter