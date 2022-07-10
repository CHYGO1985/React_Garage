import logo from './logo.svg';
import './stylesheets/App.css';
// import Hero from "./components/Hero"
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
