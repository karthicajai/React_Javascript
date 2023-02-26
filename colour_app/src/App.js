
import './App.css';
import ShowColor from './ShowColor';
import InputColor from './InputColor';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <header className="App-header"></header>
      <ShowColor
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        />
      <InputColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
       />
    </div>
  );
}

export default App;
