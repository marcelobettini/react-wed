import { useEffect, useState } from 'react'
import pokemonCtx from './pokemonCtx'
import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'
import PokemonTable from './components/PokemonTable'
function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(json => setData(json))
  }, [])
  if (!data) return <div>Fetching Pokemons...</div>

  return (
    <pokemonCtx.Provider value={{ data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon }}>
      <div style={{ margin: "auto", display: "flex", flexDirection: "column", width: "60vw" }}>
        <h1>Pokemon Fider</h1>
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
