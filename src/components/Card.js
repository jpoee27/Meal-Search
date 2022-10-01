import React, { useEffect } from 'react'

const Card = ({ meal }) => {
  useEffect(() => {
    
    console.log(meal);
  })
  return (
    <div className='w-30 h-24 bg-slate-300 z-30'>
      <h2 className='text-3xl'>{meal.label}</h2>
      <img src={meal.image}></img>
    </div>
  )
}

export default Card