import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { Navigate, useNavigate, useParams } from 'react-router-dom'



const PokedexidPage = () => {

  const navir =  useNavigate()

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getpokemon] = useFetch(url)

  useEffect (() => {
    getpokemon()
  }, [id])

  const gotoback = () => {
    navir("/pokedex")
  }

  console.log(pokemon)

  return (
    <div>
      <div>
        <button onClick={gotoback}>go to back</button>
      </div>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </div>
  )
}

export default PokedexidPage