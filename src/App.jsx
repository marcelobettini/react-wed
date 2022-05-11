import { useEffect, useState } from 'react'
import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'
import PokemonRow from './components/PokemonRow'
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
    <div style={{ margin: "auto", width: 800, paddingTop: "1em" }}>
      <h1>Pokemon Fider</h1>
      <div style={{
        display: "grid", gridTemplateColumns: "80% 20%", gap: "3rem"
      }}>
        <div>
          <PokemonFilter setFilter={setFilter} />
          <table width="100%">
            <thead>
              <tr>
                <th>name</th>
                <th>type</th>
              </tr>
            </thead>
            <tbody>
              {data.filter(({ name: { english } }) => english.toLowerCase().startsWith(filter.toLowerCase()))
                .splice(0, 18)
                .map((pokemon) => <PokemonRow key={pokemon.id} pokemon={pokemon} onInfo={(pokemon) => setSelectedPokemon(pokemon)} />)
              }
            </tbody>
          </table>

        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>


  )
}

export default App
