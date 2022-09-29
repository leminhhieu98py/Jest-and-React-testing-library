import { screen, render, fireEvent } from '@testing-library/react';
import OrderSummaryPage from '../OrderSummaryPage';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };

test('Toggle Checkbox', () => {
  render(<OrderSummaryPage />);

  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
});

test('Toggle checkbox to disable submit button', () => {
  render(<OrderSummaryPage />);

  const checkboxElement = screen.getByRole('checkbox');
  const submitButtonElement = screen.getByRole('button');
  expect(submitButtonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(submitButtonElement).toBeEnabled();

  fireEvent.click(checkboxElement);
  expect(submitButtonElement).toBeDisabled();
});
