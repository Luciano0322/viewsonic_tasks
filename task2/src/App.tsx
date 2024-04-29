import { useState } from 'react'
import { useInterval } from './useInterval';


function App() {
  const [secCount, setSecCount] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  useInterval(
    () => {
      setSecCount(secCount + 1)
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? 1000 : null, // I choose change for every seconds
  )
  const start = () => setIsPlaying(true);
  const end = () => setIsPlaying(false);
  const clear = () => setSecCount(0);
  return (
    <main className="container">
      <h1>Task2</h1>
      <div>
        <p>wait seconds...</p>
        <p>{secCount}</p>
      </div>
      <button className="btn" onClick={start} disabled={secCount!==0}>start</button>
      <button className="btn" onClick={end}>end</button>
      {secCount!==0 && !isPlaying && <button className="btn" onClick={clear}>clear</button>}
    </main>
  )
}

export default App
