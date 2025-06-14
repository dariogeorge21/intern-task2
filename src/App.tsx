import { useState, useEffect } from 'react';
import './App.css';

type PokemonStatsType = {
  id: number;
  sprite: string;
  name: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [allStats, setAllStats] = useState<PokemonStatsType[]>([]);

  async function multiFetch() {
    setAllStats([]);
    setErrorMessage('');

    const fetches = Array.from({ length: 16 }, async () => {
      const randomNumber = Math.floor(Math.random() * 151) + 1;

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        if (!response.ok) throw new Error('Failed to fetch data from API!');

        const data: any = await response.json();

        const stats: PokemonStatsType = {
          id: data.id,
          sprite: data.sprites.front_default,
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          height: data.height,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat
        };

        return stats;
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setErrorMessage(error.message);
        }
        return null;
      }
    });

    const results = await Promise.all(fetches);
    const filteredResults = results.filter((res): res is PokemonStatsType => res !== null);
    setAllStats(filteredResults);
  }

  useEffect(() => {
    multiFetch();
  }, []);

  return (
    <>
      <header className='heading'>Pokemon Benchmark</header>
      <br />
      <hr className='hr' />
      <div className="statsSection">
        <div className="statsBoard">
        <h2 className="subHead">Statistics</h2>
      </div>
      </div>
      <div className='benchmarkContainer'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>
      <br />
      <hr className='hr' />
      <div className="subHead">
        <h2 >Pokemon Arena</h2>
      </div>
      <button className="shuffle" onClick={multiFetch}>Shuffle</button>
    
      
      <div className='arenaContainer'>
        {allStats.map((pokemon, index) => (
          <div key={index} className='arenaCard'>
            <img src={pokemon.sprite} alt="sprite" />
            <h2>{pokemon.name}</h2>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        ))}
        {errorMessage && <p className='errorContainer'>Error: {errorMessage}</p>}
      </div>
    </>
  );
}

export default App;
