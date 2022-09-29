import React from 'react';
import { useState } from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR, DISABLE_COLOR } from './../../color';

function StudyPage() {
  const [color, setColor] = useState(PRIMARY_COLOR);
  const [isCheck, setIsCheck] = useState(false);
  const newButtonColor =
    color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR;

  return (
    <div>
      <input type="checkbox" onClick={(e) => setIsCheck(e.target.checked)} />
      <button
        onClick={() => setColor(newButtonColor)}
        style={{
          backgroundColor: isCheck ? DISABLE_COLOR : color,
          color: '#fff'
        }}
        disabled={isCheck}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default StudyPage;
