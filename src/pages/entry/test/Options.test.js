import Options from '../Options';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  const altTexts = scoopImages.map((scoopImage) => scoopImage.alt);
  expect(altTexts).toEqual(['Vanilla scoop', 'Chocolate scoop']);
});

test('not scoop', async () => {
  render(<Options optionType="notscoops" />);

  const emptyRow = await screen.findByTestId('row');
  expect(emptyRow).toBeEmptyDOMElement();
});

test('interact with add - minus button', async () => {
  render(<Options optionType="scoops" />);

  const totalMoney = screen.getByText('Total:', { exact: false });
  expect(totalMoney).toHaveTextContent('0');

  const addButtons = await screen.findAllByTestId(/add/i);
  const minusButtons = await screen.findAllByTestId(/minus/i);
  const addButton1 = addButtons[0];
  const addButton2 = addButtons[1];
  const minusButton1 = minusButtons[0];
  const minusButton2 = minusButtons[1];

  const user = userEvent.setup();

  await user.click(addButton1);
  expect(totalMoney).toHaveTextContent('2');

  await user.click(addButton2);
  expect(totalMoney).toHaveTextContent('5');

  await user.click(minusButton1);
  expect(totalMoney).toHaveTextContent('3');

  await user.click(minusButton2);
  expect(totalMoney).toHaveTextContent('0');

  await user.click(minusButton2);
  expect(totalMoney).toHaveTextContent('0');
});
