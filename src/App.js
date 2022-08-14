import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CardGrid from "./components/CardGrid";

function App() {
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //^^^not using this isLoading variable yet, once getting API request URL tweaked with the correct parameters, then I can implement this variable to use the loading spinner gif (that is saved in the images folder) to showup while waiting for the API call to be made
  
  // useEffect(() => {
    
  //   const fetchMeals = async () => {
  //     const result = await axios("https://api.edamam.com/search?app_id=df2a8020&app_key=e0970536c6d9fea58a687ed66d1449f8&q=beef")

  //     //I GOT THIS URL ^^^ WORKING, STILL THROWING ERRORS IN CONSOLE MOST OF THE TIME, BUT WHILE IT IS STILL GIVING ME DATA, SO NOT MAD ABOUT IT ATM. NEED TO TWEEK THIS AND MAKE SURE I AM ABLE TO GET THE RECIPE IMAGES DISPLAYED IN DIFFERENT COMPONENT BEFORE MOVING ON. NEXT STEPS AFTERWARDS WOULD BE CREATING FUNCTIONALITY BETWEEN SEARCH BAR AND API CALL, AND THEN STYLING THE CARD ELEMENTS SO WHEN ALL IS SAID AND DONE I CAN JUST PRESENT THE DATA IN THE CARDS AND HOPEFULLY HAVE TIME TO ADD SOME EXTRA PARAMETERS TO GIVE MORE OPTIONS (FOR EXAMPLE HIGH PROTEIN, LOW CARB, etc.)
  //     setMeals(result.data.hits);
  //     setIsLoading(false);
  //   }
  //   fetchMeals();
  //   console.log(meals);
  // }, [meals])

  return (
    <div className="bg-cover bg-[url('./images/background.jpg')] min-h-screen z-50">
      <Header />
      <Search />
      <CardGrid />
    </div>
  );
}

export default App;
