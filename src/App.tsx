import { useState } from 'react'
import './App.css'

type pokemonStatsType = {
  id: Number,
  name: String,
  height: Number,
  weight: Number,
  stats: [
    hp: {
      base_stat: Number,
      stat: {
        name: "hp"
      }
    },
    attack: {
      base_stat: Number,
      stat: {
        name: "attack"
      }
    },
    defense: {
      base_stat: Number,
      stat: {
        name: "defense"
      }
    },
    specialAttack: {
      base_stat: Number,
      stat: {
        name: "special-attack"
      }
    },
    specialDefense: {
      base_stat: Number,
      stat: {
        name: "special-defense"
      }
    },
    speed: {
      base_stat: Number,
      stat: {
        name: "speed"
      }
    }
  ]
}

function App() {
  
  const [errorMessage,setErrorMessage] = useState('');
  const [pokemonStats, setPokemonStats] = useState<(pokemonStatsType) | null>(null);

  function multiFetch() {
    for(let count=0;count<16;count++){
      let randomNumber = (Math.floor(Math.random()*151))+1;
      const fetchData = async () => {
        setPokemonStats(null);
        setErrorMessage('');
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
          if (!response.ok) {
            throw new Error("Failed to fetch data from API!");
          }

        const data = await response.json();
        
        setPokemonStats({
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat
        })

      } catch (error) {
          if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
      }
    }
  }
}
  

  return (
    <>
      <header className='heading'>Pokemon Benchmark</header>
      <br /><hr className='hr'/>
      <h2 className='subHead'>Benchmark Area</h2>
      <div className="benchmarkContainer">
        <div className="card">
        </div>
        <div className="card">
        </div>
        <div className="card">
        </div>
        <div className="card">
        </div>
        <div className="card">
        </div>
        <div className="card">
        </div>
      </div>
      <br /><hr className='hr'/>
      <h2 className='subHead'>Pokemon Arena</h2>
      <div className="arenaContainer">
        <div className="arenaCard">
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
