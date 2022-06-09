import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
        <Hero  />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
     
    </div>
  );
}

export default App;
