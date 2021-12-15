import './App.css';
import AngryButton from './components/fancy-buttons/AngryButton';
import CounterButton from './components/fancy-buttons/CounterButton';
import LightSwitchButton from './components/fancy-buttons/LightSwitchButton';
import TextReapeaterButton from './components/fancy-buttons/TextRepeaterButton';

function App() {
  return (
    <div className={`App`}>
        <h1>Fancy Buttons!!</h1>
        <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextReapeaterButton />
        </section>

    </div>
  );
}

export default App;
