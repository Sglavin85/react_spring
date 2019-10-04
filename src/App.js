import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.png';
import './App.css';
import Routes from './Routes'
import Toggle from './Toggle';
import Nav from './Nav';
import Accordion from './Accordion';
import Checkout from './Checkout';
import ModalWrapper from './Modal';
import WayPoints from './Waypoints';
import Gesture from './Gesture';


const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(66%, 0, 0) scale(1)` : `translate3d(100%, 0, 0) scale(0.6)`
  });

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} alt="Strabo" className="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>Menu</button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        {/* <Routes /> */}
        {/* <Toggle /> */}
        <ModalWrapper />
        <Accordion />
        <WayPoints />
        <Gesture />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
}
export default App;