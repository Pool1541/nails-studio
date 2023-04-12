import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Prices from "./components/prices/Prices";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero />
        <Services />
        <Prices />
        <Gallery />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
