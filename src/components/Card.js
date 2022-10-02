import React, { useEffect } from 'react'

const Card = ({ meal }) => {
  let capitalLabel = meal.label.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  useEffect(() => {
    console.log(meal);
  })
  return (
    <div className='w-[8.5rem] sm:w-72 lg:w-44 xl:w-52 2xl:w-72 h-40 sm:h-48 rounded-lg bg-teal-900 outline outline-2 outline-stone-500 hover:outline-white hover:outline-4 focus:outline-4 focus:outline-white z-30 overflow-hidden justify-self-center' tabIndex={0}>
      <h2 className='text-center text-white text-sm md:text-xl xl:text-2xl leading-normal pt-1'>{capitalLabel}</h2>
      <img src={meal.image} className='w-full h-full object-center rounded-lg'></img>
    </div>
  )
}

export default Card