import { render, screen } from '@testing-library/react';
import ScoopOptions from '../ScoopOption';

test('render scoop options', () => {
  render(<ScoopOptions name="imgScoop" imagePath="imagePath" />);

  const imgElement = screen.getByRole('img', { name: /scoop$/i });
  expect(imgElement).toBeInTheDocument();
  expect(imgElement.src).toBe('http://localhost:3030/imagePath');
  expect(imgElement.alt).toBe('imgScoop scoop');
});
