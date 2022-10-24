import React from 'react'

const PopUp = ({ trigger, setTrigger, mealTitle, meal }) => {
  return (trigger) ? (
    <div className='w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.8)] z-40 flex items-center'>
      <div className='w-screen h-[80vh] relative bg-teal-400'>
        <h1 className='text-white text-center text-xl md:text-3xl xl:text-4xl font-bold py-2 pb-5 md:py-3 underline underline-offset-8'>{mealTitle}</h1>
        <section className='h-2/5 flex justify-evenly'>
          <img src={meal.image} className="w-1/2 md:w-5/12 lg:w-4/12 h-full object-center lg:ml-[-10rem] xl:ml-[-20rem] outline outline-stone-500 outline-2"></img>
          {/* finish styling this list then start moving on to the bottom portion (example written out in notebook) */}
          <ul className='text-stone-800 text-lg md:text-xl xl:text-2xl'>
            <li>Calories: {Math.round(meal.calories).toLocaleString("en-US")}</li>
            <li>Protein: {Math.round(meal.totalNutrients.PROCNT.quantity).toLocaleString("en-US")}</li>
            <li>Carbohydrates: {Math.round(meal.totalNutrients.CHOCDF.quantity).toLocaleString("en-US")}</li>
            <li>Fat: {Math.round(meal.totalNutrients.FAT.quantity).toLocaleString("en-US")}</li>
          </ul>
        </section>
        <button className="w-20 md:w-32 xl:h-12 absolute bottom-0 left-0 right-0 m-auto bg-slate-400 hover:bg-white focus:bg-white  text-white hover:text-teal-400 focus:text-teal-400" onClick={() => setTrigger(false)}>
          <span className="text-2xl md:text-4xl font-bold"aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  ) : "";
}

export default PopUp