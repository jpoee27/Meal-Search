import React, { useState, useEffect } from 'react'
import Card from './Card'
import Sort from './Sort';

const CardGrid = ({ meals }) => {
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    document.getElementById("sort-form").reset();
    //^^^ no longer resets select input???
  }, [meals]);

  //STILL NEED TO FIX THIS SORTING FUNCTION, THINKING I MIGHT NEED TO CREATE A NEW PIECE OF STATE AS LIKE A SAMPLE ARRAY OF DATA SO I CAN SORT IT, BUT THEN I NEED TO FIND A WAY TO MAKE SURE THAT THE GRID DISPLAYS THE SORTED VERSION (then later will need to make sure I find a way to do it dynamically with every sortType and make sure that it is sorting in reverse for high-protein sortType)

  // useEffect(() => {
  //   const sortedGrid = [...meals].sort((a, b) => {
  //     return a.recipe.calories - b.recipe.calories
  //   })
  //   console.log(sortedGrid);
  // }, [sortType])

  const grid = meals.map((meal, index) => {
    return (
      <Card 
        key={index}
        meal={meal.recipe}
      />
    )
  })

  return (
    <div className='w-full lg:h-[78vh] text-black pt-5'>
      <Sort sortType={sortType} setSortType={setSortType}/>
      <section className='w-full lg:h-[70vh] grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 md:px-20 lg:px-10 xl:px-20 pt-10 md:pt-5 2xl:pt-20 pb-10 md:pb-5  content-center flex flex-grow justify-evenly'>
        {grid} 
      </section>
    </div>
  )
}

export default CardGrid