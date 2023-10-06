import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import "./layouts/selectype.css"

const SelectType = ({setTypeSelected}) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [types, getTypes] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])
  
  const handleChange = (e) => {
    setTypeSelected(e.target.value)
  }

  return (
    <div className='selector_container'>
      <select onChange={handleChange}>
        <option className='option' value='allpokemons' >All pokemons</option>
        {
          types?.results.map(typeInfo => (
            <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectType