import React from 'react'
import Card from './Card'

const CardGrid = () => {
  //should be mapping over api array but can change after
  const tempArr = [1,2,3,4,5,6,7,8,9,10];
  const grid = tempArr.map(() => {
    return (
      <Card />
    )
  })
  return (
    <section className='max-h-full grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-3 px-10 pt-10 lg:px-40 lg:pt-20 flex justify-evenly'>
      {grid}
    </section>
  )
}

export default CardGrid