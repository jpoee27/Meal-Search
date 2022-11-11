import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CardGrid from "./components/CardGrid";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);
  // GOT POPUP STYLED, STOPPED BACKGROUND SCROLLING WHEN POPUP IS OPEN, AND CREATED AN ERRO MESSAGE FOR WHEN NO SEARCH RESULTS ARE FOUND. NOW NEED TO GET THE LOADING SPINNER WORKING AND GET THE SORTING SELECT WORKING
  
  const fetchMeals = async () => {
    try {
      const result = await axios(`https://api.edamam.com/search?app_id=df2a8020&app_key=e0970536c6d9fea58a687ed66d1449f8&q=${searchItem}`)
      if (result.data.count === 0) {
        alert(`Sorry could not find any meals called "${searchItem}".`)
      } else {
        setMeals(result.data.hits);
        setIsLoading(false);//still haven't set this up with loading spinner
      }
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    popUp ? 
    document.body.style.overflow = "hidden" : 
    document.body.style.overflow = "auto"
  }, [popUp])

  return (
    <div className="bg-cover bg-[url('./images/mobile-background.jpeg')]  lg:bg-[url('./images/desktop-background.jpg')] min-h-screen z-50 ">
      <Header />
      <Search searchItem={searchItem} setSearchItem={setSearchItem} fetchMeals={fetchMeals}/>
      <CardGrid meals={meals} popUp={popUp} setPopUp={setPopUp}/>
    </div>
  );
}

export default App;
