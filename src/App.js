import React, { useState } from "react";
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
    setMeals(result.data.hits);
    setIsLoading(false);//still haven't set this up with loading spinner
  }
  
  return (
    <div className="bg-cover bg-[url('./images/mobile-background.jpeg')]  lg:bg-[url('./images/desktop-background.jpg')] min-h-screen z-50">
      <Header />
      <Search searchItem={searchItem} setSearchItem={setSearchItem} fetchMeals={fetchMeals}/>
      <CardGrid meals={meals}/>
      {/* <h1 className="bg-slate-200 text-teal-600 text-center text-2xl md:text-3xl xl:text-4xl mt-40 py-10">Sorry, could not find any meals called "{searchItem}"</h1> 
      
      ^^^this is an error message if there are no results found, but I still need to find away to check if there are no results found after the searchItem has been submitted (problem I am running into now was I could not just check if the searchItem.length === 0 because the searchItem state changes every time a letter is typed in, so need to figure out how to only run it when search has been submitted)*/}
    </div>
  );
}

export default App;
