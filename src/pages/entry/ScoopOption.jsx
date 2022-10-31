import { useState } from 'react';
import Col from 'react-bootstrap/Col';

export default function ScoopOptions({
  name,
  imagePath,
  price,
  setTotalMoney
}) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToMenu = () => {
    setQuantity((quantity) => quantity + 1);
    setTotalMoney((totalMoney) => totalMoney + price);
  };

  const handleMinusFromMenu = () => {
    if (quantity > 0) {
      setQuantity((quantity) => quantity - 1);
      setTotalMoney((totalMoney) => totalMoney - price);
    }
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <span>Quantity: {quantity}</span>
      <button onClick={handleAddToMenu} data-testid={`${name} add`}>
        Add
      </button>
      <button onClick={handleMinusFromMenu} data-testid={`${name} minus`}>
        Minus
      </button>
    </Col>
  );
}
