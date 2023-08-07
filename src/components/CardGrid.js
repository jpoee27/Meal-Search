import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import Sort from './Sort';

const CardGrid = ({ meals, setMeals }) => {
  const [sortType, setSortType] = useState("");
  const [grid, setGrid] = useState(null)
  const sortRef = useRef();

  const sortExpression = (sortType) => {
    switch (sortType) {
        case 'low-calorie': 
            return 'a.recipe.calories - b.recipe.calories';
        case 'low-carb':
            return 'a.recipe.totalNutrients.CHOCDF.quantity - b.recipe.totalNutrients.CHOCDF.quantity';
        case 'low-fat':
            return 'a.recipe.totalNutrients.FAT.quantity - b.recipe.totalNutrients.FAT.quantity';
        case 'high-protein':
            return 'a.recipe.totalNutrients.PROCNT.quantity - b.recipe.totalNutrients.PROCNT.quantity';
        case 'quickest-prep':
            return 'a.recipe.totalTime - b.recipe.totalTime';
        case 'least-ingredients':
            return 'a.recipe.ingredients.length - b.recipe.ingredients.length';
    }
  }

  useEffect(() => {
    setGrid(meals.map((meal, index) => {
      return (
        <Card 
          key={index}
          meal={meal.recipe}
        />
      )
    }))
    sortRef.current.value = "";
    setSortType("");
  }, [meals]);
  
  useEffect(() => {
    const sortedGrid = meals
      .sort((a, b) =>  eval(sortExpression(sortType)))
      .map((meal, index) => {
        return (
          <Card 
            key={index}
            meal={meal.recipe}
          />
        )
      })
    setGrid(sortedGrid)
  }, [sortType])

  return (
    <div className='w-full lg:h-[78vh] text-black pt-5'>
      <Sort 
        sortType={sortType} 
        setSortType={setSortType} 
        sortRef={sortRef}
      />
      <section className='w-full lg:h-[70vh] grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 md:px-20 lg:px-10 xl:px-20 pt-10 md:pt-5 2xl:pt-20 pb-10 md:pb-5  content-center flex flex-grow justify-evenly'>
        {grid} 
      </section>
    </div>
  )
}

export default CardGrid