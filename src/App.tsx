import { useState, useEffect } from 'react';
import type {PokemonStatsType}  from './types/types';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [allStats, setAllStats] = useState<PokemonStatsType[]>([]);
  const [benchmarkPokemon, setBenchmarkPokemon] = useState<PokemonStatsType[]>([]);

  function reloadPage() {
    location.reload();
  }

  async function multiFetch() {
    setAllStats([]);
    setErrorMessage('');

    const fetches = Array.from({ length: 36 }, async () => {
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

  async function addToBenchmark(id:number) {
    if ((benchmarkPokemon.length)>5){
      alert("You can only add upto 6 cards!!");
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Failed to fetch data from API!');

        const data: any = await response.json();

        const compareStats: PokemonStatsType = {
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
        setBenchmarkPokemon(prev => [...prev, compareStats]);


    } catch (error) {
      if (error instanceof Error) {
          console.error(error.message);
          setErrorMessage(error.message);
        }
    }
  }console.log(benchmarkPokemon);

  const totals = {
    totalHeight: 0,
    totalWeight: 0,
    totalHp: 0,
    totalAttack: 0,
    totalDefense: 0,
    totalSpecialAttack: 0,
    totalSpecialDefense: 0,
    totalSpeed: 0,
  }

  for (const key in benchmarkPokemon){
    totals.totalHp += benchmarkPokemon[key].hp,
    totals.totalHeight += benchmarkPokemon[key].height,
    totals.totalWeight += benchmarkPokemon[key].weight,
    totals.totalAttack += benchmarkPokemon[key].attack,
    totals.totalDefense += benchmarkPokemon[key].defense,
    totals.totalSpecialAttack += benchmarkPokemon[key].specialAttack,
    totals.totalSpecialDefense += benchmarkPokemon[key].specialDefense,
    totals.totalSpeed += benchmarkPokemon[key].speed
  }

  return (
    <>
      <header className='heading'>Pokemon Benchmark</header>

      <hr className='hr' />
      <div className="statsSection">
        <div className="statsBoard">

        <h2 className="subHead">Statistics</h2>
        <p>Checkout the arena and add cards</p>
        <div className="allStats">
          <p className="myStats">Total HP: {totals.totalHp}</p>
          <p className="myStats">Total Speed: {totals.totalSpeed}</p>
          <p className="myStats">Total Defense: {totals.totalDefense}</p>
          <p className="myStats">Total Attack: {totals.totalAttack}</p>
          <p className="myStats">Total Special Attack: {totals.totalSpecialAttack}</p>
          <p className="myStats">Total Special Defense: {totals.totalSpecialDefense}</p>
          <p className="myStats">Total Height: {totals.totalHeight}</p>
          <p className="myStats">Total Weight: {totals.totalWeight}</p>
        </div>
        <button onClick={reloadPage} className='button'>Reset</button>

      </div>
      </div>

      <div className='benchmarkContainer'>
        {benchmarkPokemon.map((pokemon,index) => (
          <div key={index} className="benchmarkCard">
            <p hidden>Id: {pokemon.id}</p>
            <img src={pokemon.sprite} alt="sprite" />
            <h2>{pokemon.name}</h2>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
      
          </div>
        ))}
      </div>
      <br />
      <hr className='hr' />
      <div className="subHead">
        <h2 >Pokemon Arena</h2>
      </div>
      <button className="button" onClick={multiFetch}>Shuffle</button>
    
      
      <div className='arenaContainer'>
        {allStats.map((pokemon, index) => (
          <div key={index} className='arenaCard'>
            <p hidden>Id: {pokemon.id}</p>
            <img src={pokemon.sprite} alt="sprite" />
            <h2>{pokemon.name}</h2>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <br />
            <button onClick={() => addToBenchmark(pokemon.id) } className="button">Add to Compare</button>
          </div>
        ))}
        {errorMessage && <p className='errorContainer'>Error: {errorMessage}</p>}
      </div>
    </>
  );
}

export default App;
