import React, { useContext } from 'react'
import pokemonCtx from '../pokemonCtx'
import { TextField } from '@mui/material'
const PokemonFilter = () => {
    const { dispatch } = useContext(pokemonCtx)
    return (
        <TextField variant='filled' label="Find Pokemon..." onChange={(e) => dispatch(
            {
                type: 'SET_FILTER',
                payload: e.target.value
            }
        )}></TextField>
    )
}
export default PokemonFilter