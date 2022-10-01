import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ({ searchItem, setSearchItem, fetchMeals }) => {
  const handleSearchChange = e => {
    setSearchItem(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (searchItem !== "") {
      fetchMeals();
      setSearchItem("");
      
    } else {
      alert("Please Enter a Value in the Search Bar");
    }
  }

  return (
    <form 
      className="mx-auto mt-6 lg:mt-10 h-12 lg:h-16 flex justify-end w-11/12 md:w-7/12"
      onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for Meals"
        value={searchItem}
        onChange={handleSearchChange}
        className= "w-10/12 rounded-3xl border-4 border-stone-500 text-center texl-lg md:text-2xl lg:text-3xl placeholder:text-center placeholder:text-teal-400 placeholder:text-lg placeholder:md:text-2xl placeholder:lg:text-3xl hover:border-teal-400 focus:outline-none focus:border-teal-400"/>
      <button 
        type="submit" 
        className="w-14 md:w-18 lg:w-24 bg-teal-400 ml-4 rounded-full hover:outline outline-white focus:outline outline-4 outline-white">
        <FontAwesomeIcon 
          icon={faMagnifyingGlass} 
          className="text-sm md:text-xl lg:text-3xl text-white"/>
      </button>
    </form>
  )
}

export default Search