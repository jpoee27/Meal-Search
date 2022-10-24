import React from 'react'

const Sort = ({ sortType, setSortType }) => {
  const optionStyles = "bg-white text-teal-400 text-center text-xs md:text-lg xl:text-xl rounded";
  return (
    <form id="sort-form">
      <label className='text-center text-white text-xs md:text-lg xl:text-xl leading-normal px-5'>Sort Meals By</label>
      <select 
        className="bg-teal-400 text-white text-center text-xs md:text-lg xl:text-xl rounded" 
        value={sortType} 
        onChange={(e) => setSortType(e.target.value)}>
        <option className={optionStyles} value="" defaultValue>Default</option>
        <option className={optionStyles} value="low-calorie" >Low Calorie</option>
        <option className={optionStyles} value="low-carb" >Low Carb</option>
        <option className={optionStyles} value="low-fat" >Low Fat</option>
        <option className={optionStyles} value="high-protein" >High Protein</option>
        <option className={optionStyles} value="quickest-prep" >Quickest Prep</option>
        <option className={optionStyles} value="least-ingredients" >Least Ingredients</option>
      </select>
    </form>
  )
}

export default Sort