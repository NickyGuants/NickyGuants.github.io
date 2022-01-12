import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
