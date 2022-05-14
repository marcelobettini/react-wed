import React, { useContext } from "react";
import pokemonCtx from "../pokemonCtx";
import PokemonRow from "./PokemonRow";
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"

const PokemonTable = () => {
    const { state: { data, filter } } = useContext(pokemonCtx)
    return (
        <TableContainer component={Paper} sx={{ display: "flex", mt: "2em" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter(({ name: { english } }) => english.toLowerCase().startsWith(filter.toLowerCase()))
                        .splice(0, 8)
                        .map((pokemon) => <PokemonRow
                            key={pokemon.id}
                            pokemon={pokemon} />)
                    }
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default PokemonTable
