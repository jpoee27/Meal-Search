import React from 'react'

const PopUp = ({ trigger, setTrigger, mealTitle, meal }) => {
  return (trigger) ? (
    <div className='w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.8)] z-40 flex items-center'>
      <div className='w-screen h-[90vh] relative bg-teal-400'>
        <h1 className='text-white text-center text-xl md:text-3xl xl:text-4xl font-bold py-2 pb-5 md:py-3 underline underline-offset-8'>{mealTitle}</h1>
        <section className='h-2/5 flex justify-evenly'>
          <img src={meal.image} alt="Meal Not Found"className="w-1/2 md:w-5/12 lg:w-4/12 h-full object-center 2xl:ml-[-20rem] outline outline-stone-500 outline-2"></img>
          {/* nutrition list */}
          <ul className='text-white text-md md:text-2xl xl:text-3xl ml-1 2xl:ml-[-20rem] space-y-3 overflow-auto outline outline-2 lg:outline-none'>
            <li>Calories: {Math.round(meal.calories).toLocaleString("en-US")}</li>
            <li>Protein: {Math.round(meal.totalNutrients.PROCNT.quantity).toLocaleString("en-US")}g</li>
            <li>Carbohydrates: {Math.round(meal.totalNutrients.CHOCDF.quantity).toLocaleString("en-US")}g</li>
            <li>Fat: {Math.round(meal.totalNutrients.FAT.quantity).toLocaleString("en-US")}g</li>
            {/* prep time and source button included w/ list of nutrion facts */}
            <li>Prep Time: {meal.totalTime} mins</li>
            <li className="text-center">
              <a href={meal.url} target="_blank" rel="noreferrer" tabIndex={-1}>
                <button className='w-full bg-teal-700 focus:bg-white focus:text-teal-400 hover:bg-white hover:text-teal-400'>Source</button>
              </a>
            </li>
          </ul>
        </section>
        {/* Ingredients List */}
        <section className='h-[27vh] flex flex-cols mt-3 lg:mt-10 xl:mt-16 border-2 border-teal-800 overflow-y-auto'>
          <label className='text-lg md:text-2xl xl:text-3xl text-center text-white'>Ingredients: 
            <ul className='text-sm md:text-lg xl:text-xl text-left text-zinc-800 ml-5 list-disc columns-2 2xl:columns-4'>{meal.ingredientLines.map((ingredient, index) => <li key={index}> {ingredient} </li>)}</ul>
          </label>
        </section>
        {/* Close Button */}
        <button className="w-20 md:w-32 xl:h-12 absolute bottom-0 left-0 right-0 m-auto bg-slate-400 hover:bg-white focus:bg-white  text-white hover:text-teal-400 focus:text-teal-400" onClick={() => setTrigger(false)}>
          <span className="text-2xl md:text-4xl font-bold"aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  ) : "";
}

export default PopUp