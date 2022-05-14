import { useEffect, useReducer } from 'react'

import pokemonCtx from './pokemonCtx'
import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'
import PokemonTable from './components/PokemonTable'
import pokemonReducer from './pokemonReducer'
function App() {
  const [state, dispatch] = useReducer(pokemonReducer, { data: [], filter: "", selectedPokemon: null })
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(json => dispatch({
        type: 'SET_DATA',
        payload: json
      }))
  }, [])
  if (!state.data) return <div>Fetching Pokemons...</div>

  return (
    <pokemonCtx.Provider value={{ state, dispatch }}>
      <div style={{ margin: "auto", display: "flex", flexDirection: "column", width: "60vw" }}>
        <h1>Pokemon Finder</h1>
        <div style={{
          display: "grid", gridTemplateColumns: "3fr 1fr", alignItems: "center", gap: "1.5rem"
        }}>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </div>
      </div>
    </pokemonCtx.Provider>
  )
}

export default App
