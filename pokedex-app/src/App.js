import Header from "./components/header"
import Footer from "./components/Footer"
import CardsPage from "./components/CardsPage";
import PokemonPage from "./components/PokemonPage";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import PokemonContext from "./contexts/PokemonContext";
import { useState } from 'react';


function App() {
  const [pokemons, setPokemons] = useState([])
  return (
    <PokemonContext.Provider value={{ pokemons: pokemons, setPokemons: setPokemons }}>
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
