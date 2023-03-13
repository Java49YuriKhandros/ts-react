import React from 'react';
import { Input } from './components/Input';


// import './App.css';
// import { Timer } from './components/Timer';

function App() {
  // const flexColumn: React.CSSProperties = {display: 'flex', flexDirection: 'column'}
  // const flexRow: React.CSSProperties = { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '50vw', marginTop: '4vh'}

  // return (
  //   <div style={flexColumn}>
  //     <div style={flexRow}>
  //       <Timer cityOrCountry='London'/>
  //       <Timer cityOrCountry='Paris'/>
  //     </div>
  //     <div style={flexRow}>
  //       <Timer cityOrCountry='China' />
  //       <Timer cityOrCountry={'Moncton'} />
  //     </div>
  //   </div>
  // );
function pocessInput(value:string):string {
     let res: string = '';
     if(value.toLowerCase().includes('hello')){
      res = "get tired from HELLO. It's forbiden word";
     }
     return res;
  }

  return (
  
 <Input inputId={'input-1'} inputProcess={pocessInput}/>
)
}



export default App;
