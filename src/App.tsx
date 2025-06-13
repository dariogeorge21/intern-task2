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

  return (
    <>
      <header className='heading'>Pokemon Benchmark</header>
      <br /><hr className='hr'/>
      <h2 className='subHead'>Benchmark Area</h2>
      <div className="container">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <br /><hr className='hr'/>
      <h2 className='subHead'>Pokemon Arena</h2>
      <div className="container">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  )
}

export default App
