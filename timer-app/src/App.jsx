import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const intervalId = useRef(null);
  const playTimerHandler = () => {
    if(intervalId.current!==null)return;
    intervalId.current = setInterval(() => {
      setTimer(prevTimer => prevTimer+1);
    }, 1000);
  }
  const pauseTimerHandler = () => {
    clearInterval(intervalId.current);
    intervalId.current=null;
  }
  const resetTimerHandler = () => {
    clearInterval(intervalId.current);
    intervalId.current=null;
    setTimer(0);
  }

  return (
    <>
    <h1>React Timer Application</h1>
    <p>{timer}</p>
    <button className='playButton' onClick={() => playTimerHandler()}>Play</button>
    <button className='pauseButton' onClick={() => pauseTimerHandler()}>Pause</button>
    <button className='resetButton' onClick={() => resetTimerHandler()}>Reset</button>
    </>
  )
}

export default App
