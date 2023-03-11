import React from 'react';

// import './App.css';
import { Timer } from './components/Timer';

function App() {
  const flexColumn: React.CSSProperties = {display: 'flex', flexDirection: 'column'}
  const flexRow: React.CSSProperties = { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '50vw', marginTop: '4vh'}

  return (
    <div style={flexColumn}>
      <div style={flexRow}>
        <Timer cityOrCountry='London'/>
        <Timer cityOrCountry='Paris'/>
      </div>
      <div style={flexRow}>
        <Timer cityOrCountry='China' />
        <Timer cityOrCountry={'Moncton'} />
      </div>
    </div>
  );
}

export default App;
