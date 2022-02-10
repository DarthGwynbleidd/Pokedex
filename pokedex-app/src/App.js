import Header from "./components/header"
import Footer from "./components/Footer"
import CardsPage from "./components/CardsPage";
import Bottom_button from "./components/Bottom_button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CardsPage />
        <Bottom_button />
        <Footer />
      </div>
    </div>
  );
}

export default App;
