import './App.css';

import TravelNote from './components/travel-note';

import travelData from './data/travel-data';

function App() {
  const travelNote = travelData.map(data => {
    return (
      <TravelNote
        {...data} 
      />
    )
  })

  return (
    <div className="travel-journal">
      {travelNote}
    </div>
  );
}

export default App;
