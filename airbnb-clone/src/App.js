import './stylesheets/App.css';
// import Hero from "./components/Hero"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/data';

function App() {
  const cards = Data.map(data => {
    return (
      <Card 
        key = {data.id}
        {...data}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
