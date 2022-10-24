import React, { useState, useEffect } from 'react'
import PopUp from './PopUp';

const Card = ({ meal }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    console.log(meal);
  }, [])
  
  const headingClasses = `text-center text-white text-sm md:text-xl xl:text-2xl leading-normal pt-1 ${hovered ? "" : "truncate"} hover:transition-all`;
  let capitalLabel = meal.label.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return (
    <>
      <button 
        className='w-[8.5rem] sm:w-72 lg:w-44 xl:w-52 2xl:w-64 h-40 sm:h-48 lg:h-44 2xl:h-52 rounded-lg bg-teal-900 outline outline-2 outline-stone-500 hover:outline-white hover:outline-4 focus:outline-4 focus:outline-white z-30 overflow-hidden justify-self-center'
        onClick={() => setPopUp(true)}
        >
        <h2 
          className={headingClasses }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          {capitalLabel}
        </h2>
        <img src={meal.image} alt='' className='w-full h-full object-top rounded-lg'></img>
      </button>
      <PopUp 
        trigger={popUp} 
        setTrigger={setPopUp}
        mealTitle={capitalLabel}
        meal={meal}
      />
    </> 
  )
}




export default Card