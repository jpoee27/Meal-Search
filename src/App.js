import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CardGrid from "./components/CardGrid";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // still need to get the isLoading state working with loading spinner gif.
  
  const fetchMeals = async () => {
    const result = await axios(`https://api.edamam.com/search?app_id=df2a8020&app_key=e0970536c6d9fea58a687ed66d1449f8&q=${searchItem}`)
    //this is now working with the search bar and displays in the meal grid(although the card still needs to be styled better). also need to see how much more info I can get from this api like calories, macros, etc.
    setMeals(result.data.hits);
    setIsLoading(false);
  }
    
  return (
    <div className="bg-cover bg-[url('./images/background.jpg')] min-h-screen z-50">
      <Header />
      <Search searchItem={searchItem} setSearchItem={setSearchItem} fetchMeals={fetchMeals}/>
      <CardGrid meals={meals}/>
    </div>
  );
}

export default App;
