import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CardGrid from "./components/CardGrid";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  
  const fetchMeals = async () => {
    try {
      const result = await axios(`https://api.edamam.com/search?app_id=df2a8020&app_key=e0970536c6d9fea58a687ed66d1449f8&q=${searchItem}`)
      if (result.data.count === 0) {
        alert(`Sorry could not find any meals called "${searchItem}".`)
      } else {
        setMeals(result.data.hits);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="bg-cover bg-[url('./images/mobile-background.jpeg')]  lg:bg-[url('./images/desktop-background.jpg')] min-h-screen z-50 ">
      <Header />
      <Search searchItem={searchItem} setSearchItem={setSearchItem} fetchMeals={fetchMeals}/>
      <CardGrid meals={meals} setMeals={setMeals}/>
    </div>
  );
}

export default App;
