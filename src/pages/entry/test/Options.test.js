import Options from '../Options';
import { render, screen } from '@testing-library/react';

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
