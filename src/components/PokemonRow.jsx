import React from 'react'
import { Button } from '@mui/material'

const PokemonRow = ({ pokemon, onInfo }) => {
    return (
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
            <td><Button variant='outlined' onClick={() => onInfo(pokemon)}>Info</Button></td>
        </tr>
    )
}

export default PokemonRow