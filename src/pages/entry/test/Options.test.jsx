import Options from '../Options';
import { render, screen } from '@testing-library/react';

test('display image for each scoop option from server', () => {
  render(<Options optionType="scoops" />);

  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });

  it('find all images', () => {
    expect(scoopImages).toHaveLength(2);
  });

  it('img have alt text', () => {
    const altTexts = scoopImages.map((scoopImage) => scoopImage.alt);
    expect(altTexts).toEqual(['Vanilla scoop', 'Chocolate scoop']);
  });
});
