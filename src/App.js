import React from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.png';
import './App.css';
import Toggle from './Toggle'

const App = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} alt="Strabo" className="logo" />
        <button className="menu-button">Menu</button>
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
}
export default App;