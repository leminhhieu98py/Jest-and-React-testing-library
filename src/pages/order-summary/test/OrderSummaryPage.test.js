import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

const setup = (jsx) => {
  return {
    user: userEvent.setup(),
    ...render(jsx)
  };
};

test('Toggle Checkbox', async () => {
  const { user } = setup(<OrderSummaryPage />);

  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).not.toBeChecked();

  await user.click(checkboxElement);
  expect(checkboxElement).toBeChecked();

  await user.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
});

test('Toggle checkbox to disable submit button', async () => {
  const { user } = setup(<OrderSummaryPage />);

  const checkboxElement = screen.getByRole('checkbox');
  const submitButtonElement = screen.getByRole('button');
  expect(submitButtonElement).toBeDisabled();

  await user.click(checkboxElement);
  expect(submitButtonElement).toBeEnabled();

  await user.click(checkboxElement);
  expect(submitButtonElement).toBeDisabled();
});
