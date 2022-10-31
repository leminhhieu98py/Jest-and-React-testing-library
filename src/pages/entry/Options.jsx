import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data));
  }, [optionType]);

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = ItemComponent
    ? items.map((item) => {
        const { name, imagePath, price } = item;
        return (
          <ItemComponent
            key={name}
            name={name}
            imagePath={imagePath}
            price={price}
            setTotalMoney={setTotalMoney}
          />
        );
      })
    : null;

  return (
    <>
      <h3>Total: {totalMoney}</h3>
      <Row data-testid="row">{optionItems}</Row>
    </>
  );
}
