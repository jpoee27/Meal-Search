import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //^^^not using this isLoading variable yet, once getting API request URL tweaked with the correct parameters, then I can implement this variable to use the loading spinner gif (that is saved in the images folder) to showup while waiting for the API call to be made
  
  useEffect(() => {
    
    const fetchMeals = async () => {
      const result = await axios("https://https://api.spoonacular.com/recipes/complexSearch?query=chicken&apiKey=b9aa8f11986d46daaecf69f21815f363&addRecipeNutrition=true&addRecipeNutrition=true")

      //JUST REALIZED THAT I CAN ONLY MAKE 1 API REQUEST A DAY FOR FREE USING THIS API SO NEED TO WORK ON OTHER PARTS OF THE APP AFTER USING 1 CALL PER DAY, ***MAKE SURE YOU MAKE THE 1 CALL PER DAY COUNT***
      setMeals(result.data);
      setIsLoading(false);
    }
    // fetchMeals();
    // console.log(meals);
  }, [meals])

  return (
    <div className="bg-cover bg-[url('./images/background.jpg')] min-h-screen">
      <Header />
      <Search />
      {/* <img src={meals[0].image} alt="meal img"></img> */}
    </div>
  );
}

export default App;
