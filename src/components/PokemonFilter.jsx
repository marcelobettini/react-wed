import React from 'react'
import { TextField } from '@mui/material'

const PokemonFilter = ({ setFilter }) => {
    return (
        <TextField variant='filled' label="Find Pokemon..." onChange={(e) => setFilter(e.target.value)}></TextField>
    )
}

export default PokemonFilter