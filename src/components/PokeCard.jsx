import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './layouts/pokecard.css'

const pokeCard = ({ url}) => {

  const [ pokemon, getpokemon] = useFetch(url)

  const navigate =  useNavigate()

  useEffect(() => {
    getpokemon()
  }, [])

  const handleNavigate = ()=> {
    navigate(`/pokedex/${pokemon.id}`)
  }
  

  return (
    <article className='pokecard' onClick={handleNavigate}>
      <header className={`pokecard_header ${pokemon?.types[0].type.name}-gradient`}>
          <img className='pokecard_img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='pokecard_body'>
        <h3 className='pokecard_name'>{pokemon?.name}</h3>
        <ul className='pokecard_types'>
          {
            pokemon?.types.map(typeInfo => 
              <li className='pokecard_typename' key={typeInfo.type.url}>{typeInfo.type.name}</li>
              )
          }
        </ul>
        <hr className='pokecard_hr' />
        <ul className='pokecard_stats'>
          {
            pokemon?.stats.map(statInfo => (
              <li className='pokecard_stats' key={statInfo.stat.url}>
                <span className='pokecard_stat_name'>{statInfo.stat.name}</span>
                <span className='pokecard_stat_base'>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default pokeCard