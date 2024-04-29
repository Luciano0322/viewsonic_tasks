import { useState } from 'react';

function App() {
  const [isEdit, setIsEdit] = useState(true);
  const [isResize, setIsResize] = useState(false);
  const toggleTextField = () => setIsEdit(pre => !pre);
  const toggleResize = () => setIsResize(pre => !pre);
  return (
    <main className="container">
      <h1>Task1</h1>
      <div className={`wrapper ${isResize ? "resize": ""}`}>
        <div className="field">
          <input className="text-field" type="text" disabled={isEdit} />
        </div>
        <div className="btns">
          <button className="btn" onClick={toggleTextField}>edit</button>
          <button className="btn" onClick={toggleResize}>resize</button>
        </div>
      </div>
    </main>
  )
}

export default App
