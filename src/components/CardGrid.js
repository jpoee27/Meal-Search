import React from 'react'
import Card from './Card'

const CardGrid = ({ meals }) => {
  const grid = meals.map((meal, index) => {
    return (
      <Card 
        key={index}
        meal={meal.recipe}
      />
    )
  })

  return (
    <section className='min-h-full grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10 md:px-20 lg:px-10 xl:px-20 pt-10 md:pt-5 xl:pt-2 0 pb-10 md:pb-5 flex flex-grow justify-evenly border-4'>
      {grid}
    </section>
  )
}

export default CardGrid