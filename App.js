import React, { useState } from 'react';
import './App.css';

function App() {
  let bgcolorbg = '#F8EFBA';
  let colorText = '#B33771';
  let data = 'Project is  Started 🐇';

  const [bgColor, setBgColor] = useState(bgcolorbg);
  const [text, setText] = useState(data);
  const [colors, setColors] = useState(colorText);

  const changebgColor = () => {
    setBgColor('cyan');
    setText('Project 1 is Completed 😄🐜');
    setColors('red');
  };
  const normalData = () => {
    setBgColor(bgcolorbg);
    setText(data);
    setColors(colorText);
  };
  return (
    <>
      <div style={{ backgroundColor: bgColor, color: colors }}>
        <h1 className='text-center'>{text}</h1>
      </div>
      <button
        className='btn btn-dark'
        onClick={changebgColor}
        onDoubleClick={normalData}
      >
        Click Me
      </button>
    </>
  );
}

export default App;
