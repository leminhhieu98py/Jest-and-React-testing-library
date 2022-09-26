import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './color';

test('Button at initial color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: `Change to ${SECONDARY_COLOR}`
  });
  expect(buttonElement).toHaveStyle({ backgroundColor: PRIMARY_COLOR });
});

test('Button toggle color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: `Change to ${SECONDARY_COLOR}`
  });
  expect(buttonElement).toHaveStyle({ backgroundColor: PRIMARY_COLOR });

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: SECONDARY_COLOR });

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: PRIMARY_COLOR });
});
