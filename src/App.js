// import './App.css';
// import { Button } from 'antd';
// import { useState } from 'react';
// import { PRIMARY_COLOR, SECONDARY_COLOR, DISABLE_COLOR } from './color';

import OrderSummaryPage from './pages/order-summary/OrderSummaryPage';

// function App() {
//   const [color, setColor] = useState(PRIMARY_COLOR);
//   const [isCheck, setIsCheck] = useState(false);
//   const newButtonColor =
//     color === PRIMARY_COLOR ? SECONDARY_COLOR : PRIMARY_COLOR;

//   return (
//     <div>
//       <input type="checkbox" onClick={(e) => setIsCheck(e.target.checked)} />
//       <button
//         onClick={() => setColor(newButtonColor)}
//         style={{
//           backgroundColor: isCheck ? DISABLE_COLOR : color,
//           color: '#fff'
//         }}
//         disabled={isCheck}
//       >
//         Change to {newButtonColor}
//       </button>
//       <Button type="primary">Primary Button</Button>
//     </div>
//   );
// }

const App = () => {
  return <OrderSummaryPage />;
};

export default App;
