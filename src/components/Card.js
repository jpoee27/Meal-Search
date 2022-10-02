import React, { useEffect } from 'react'

const Card = ({ meal }) => {
  let capitalLabel = meal.label.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  useEffect(() => {
    console.log(meal);
  })
  return (
    <div className='w-30 h-40 rounded-lg bg-teal-900 outline outline-2 outline-stone-500 hover:outline-white hover:outline-4 focus:outline-4 focus:outline-white z-30 overflow-hidden' tabIndex={0}>
      <h2 className='text-center text-white text-sm md:text-xl lg:text-2xl'>{capitalLabel}</h2>
      <img src={meal.image} className='w-full h-full object-center rounded-lg'></img>
    </div>
  )
}

export default Card