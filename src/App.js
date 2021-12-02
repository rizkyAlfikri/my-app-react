import './App.css';
import React from 'react';
import CounterComponent from './CounterComponent';

// context usage
export let TemaSitus = React.createContext('dark')

function App() {

  // const alert = () => window.alert(123)

  // const ubah = (obj) => {
  //   const btn = obj.target
  //   btn.innerText = 'Clicked'
  // }

  // const Event = () => {
  //   return <button onClick={ubah}>Info</button>
  // }

  // function onCustomClick() {
  //   alert('Yahahah')
  // }

  return (
    <div className="App">
      <TemaSitus.Provider value={'blue'} >
        <header className="App-header">
          < CounterComponent />
        </header>
      </TemaSitus.Provider>
    </div>
  );
}

export default App;
