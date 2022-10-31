import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

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
        return (
          <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        );
      })
    : null;

  return <Row data-testid="row">{optionItems}</Row>;
}
