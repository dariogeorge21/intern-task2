import { useState } from 'react'
import './App.css'

type pokemonStatsType = {
  name: string,
  height: number,
  weight: number,
  stats: {
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
  }
}

function App() {
  
  const [errorMessage,setErrorMessage] = useState('');
  const [pokemonStats, setPokemonStats] = useState<(pokemonStatsType) | null>(null);

  const 

  return (
    <>
      <header className='heading'>Pokemon Benchmark</header>
      <br /><hr className='hr'/>
      <h2 className='subHead'>Benchmark Area</h2>
      <div className="container">
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
      </div>
      <br /><hr className='hr'/>
      <h2 className='subHead'>Pokemon Arena</h2>
      <div className="container">
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
        <div className="card">
          <div className="name"></div>
          <div className="height"></div>
          <div className="weight"></div>
          <div className="hp"></div>
          <div className="attack"></div>
          <div className="defense"></div>
          <div className="specialAttack"></div>
          <div className="specialDefense"></div>
          <div className="speed"></div>
        </div>
      </div>
    </>
  )
}

export default App
