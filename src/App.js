import  React, { useState } from 'react';
import './App.css';
import AngryButton from './components/fancy-buttons/AngryButton';
import CounterButton from './components/fancy-buttons/CounterButton';
import LightSwitchButton from './components/fancy-buttons/LightSwitchButton';
import TextReapeaterButton from './components/fancy-buttons/TextRepeaterButton';

function App() {
  const [light, setLight] = useState('off');
    const dark = (light === 'off') ? 'dark' : '';
    const switchLight = () => setLight(light === "on" ? "off" : "on");

  return (
    <div className={`App ${dark}`}>
        <h1>Fancy Buttons!!</h1>
        <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light ={light} setLight={setLight} switchLight={switchLight}/>
        <TextReapeaterButton />
        </section>

    </div>
  );
}

export default App;
