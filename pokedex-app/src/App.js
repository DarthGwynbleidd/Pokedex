import Header from "./components/header"
import Footer from "./components/Footer"
import CardsPage from "./components/CardsPage";
import PokemonPage from "./components/PokemonPage";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import PokemonContext from "./contexts/PokemonContext";
import BackUpContext from "./contexts/BackupContext";
import PageTwoContext from "./contexts/PageTwoContext";
import { useState } from 'react';


function App() {
  const [pokemons, setPokemons] = useState([])
  const [backUp, setBackUp] = useState(false)
  const [pageTwo, setPageTwo] = useState(false)
  return (
    <PokemonContext.Provider value={{ pokemons: pokemons, setPokemons: setPokemons }}>
      <BackUpContext.Provider value={{ backUp: backUp, setBackUp: setBackUp }}>
      <PageTwoContext.Provider value={{ pageTwo: pageTwo, setPageTwo: setPageTwo }}>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<CardsPage />} />
              <Route path="/:name" exact element={<PokemonPage />} />
              <Route path="/error" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </PageTwoContext.Provider>
      </BackUpContext.Provider>
    </PokemonContext.Provider>
  );
}

export default App;
