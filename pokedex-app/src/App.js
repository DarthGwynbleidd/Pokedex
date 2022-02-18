import Header from "./components/header"
import Footer from "./components/Footer"
import CardsPage from "./components/CardsPage";
import PokemonPage from "./components/PokemonPage";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import PokemonContext from "./contexts/PokemonContext";
import {useState} from 'react';


function App() {
  const [pokemon, setPokemon] = useState([
    {
      name: '', 
      number: '',
      image: '',
      type1: '',
      type2: ''
    }
  ])
  return (
    <PokemonContext.Provider value={{pokemon: pokemon, setPokemon: setPokemon}}>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<CardsPage />} />
            <Route path="/:name" element={<PokemonPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
