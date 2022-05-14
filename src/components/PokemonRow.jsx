import React, { useContext } from 'react'
import { Button, TableRow, TableCell } from '@mui/material'
import pokemonCtx from '../pokemonCtx'

const PokemonRow = ({ pokemon }) => {
    const { dispatch } = useContext(pokemonCtx)
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(", ")}</TableCell>
            <TableCell><Button variant='outlined' onClick={() => dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemon })}>Info</Button></TableCell>
        </TableRow>
    )
}
export default PokemonRow