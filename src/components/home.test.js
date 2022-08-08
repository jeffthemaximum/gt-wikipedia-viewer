import { render, screen } from '@testing-library/react';
import { Header } from './home';

test('renders header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Grow Take Home/i);
  expect(linkElement).toBeInTheDocument();
});
