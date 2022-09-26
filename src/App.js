import { useState } from 'react';
import './App.css';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './color';

function App() {
  const [color, setColor] = useState(PRIMARY_COLOR);

  return (
    <div>
      <button
        onClick={() =>
          setColor(color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR)
        }
        style={{ backgroundColor: color, color: '#fff' }}
      >
        Change to {color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR}
      </button>
    </div>
  );
}

export default App;
