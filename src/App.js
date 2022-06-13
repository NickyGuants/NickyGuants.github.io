import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";


function App() {
  return (
    <div className="App">
        <Header />
        <Hero  />
        <About />
        <Stats />
        <Portfolio />
        <Contact />
        <Footer />
     
    </div>
  );
}

export default App;
