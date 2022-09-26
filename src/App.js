import { useState } from 'react';
import './App.css';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './color';

function App() {
  const [color, setColor] = useState(PRIMARY_COLOR);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div>
      <input type="checkbox" onClick={(e) => setIsCheck(e.target.checked)} />
      <button
        onClick={() =>
          setColor(color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR)
        }
        style={{ backgroundColor: color, color: '#fff' }}
        disabled={isCheck}
      >
        Change to {color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR}
      </button>
    </div>
  );
}

export default App;
