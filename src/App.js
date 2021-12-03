import './App.css';
import React from 'react';
import CounterComponent from './CounterComponent';
import {
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

// context usage
export let TemaSitus = React.createContext('dark')


function App() {

  return (
    <div className="App">
      <TemaSitus.Provider value={'blue'} >
        <ul className='menu'>
          <li>
            <NavLink to='/' activeClassName='active' >Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active' >About</NavLink>
          </li>
          <li>
            <NavLink to='/member' activeClassName='active' >Member</NavLink>
          </li>
        </ul>

        <div className='main'>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/member' element={<Navigate to='/'/>} />
          </Routes>
        </div>
      </TemaSitus.Provider>
    </div>
  );
}

export default App;
