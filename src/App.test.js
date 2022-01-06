import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn introduction text', () => {
  render(<App />);
  const introText = screen.getByText(/The first 3 cells/i);
  expect(introText).toBeInTheDocument();
});
