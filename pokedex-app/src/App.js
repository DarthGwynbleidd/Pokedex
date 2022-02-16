import Header from "./components/header"
import Footer from "./components/Footer"
import CardsPage from "./components/CardsPage";
import PokemonPage from "./components/PokemonPage";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
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
  );
}

export default App;
