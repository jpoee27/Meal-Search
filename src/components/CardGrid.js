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
    <section className='max-h-full grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-3 px-10 pt-10 lg:px-40 lg:pt-20 flex justify-evenly pb-10'>
      {grid}
    </section>
  )
}

export default CardGrid