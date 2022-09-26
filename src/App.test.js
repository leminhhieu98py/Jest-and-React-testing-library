import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './color';

test('Button at initial color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: `Change to ${SECONDARY_COLOR}`
  });
  expect(buttonElement.textContent).toBe(`Change to ${SECONDARY_COLOR}`);
  expect(buttonElement).toHaveStyle({ backgroundColor: PRIMARY_COLOR });
});

test('Button toggle color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: `Change to ${SECONDARY_COLOR}`
  });
  expect(buttonElement).toHaveStyle({ backgroundColor: PRIMARY_COLOR });

  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe(`Change to ${PRIMARY_COLOR}`);
  expect(buttonElement).toHaveStyle({ backgroundColor: SECONDARY_COLOR });

  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe(`Change to ${SECONDARY_COLOR}`);
  expect(buttonElement).toHaveStyle({ backgroundColor: PRIMARY_COLOR });
});

test('Toggle disable button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: `Change to ${SECONDARY_COLOR}`
  });
  const checkboxElement = screen.getByRole('checkbox');
  expect(buttonElement).toBeEnabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});

test('Toggle click checkbox', () => {
  render(<App />);
  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
});
