import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/header/i);
  expect(linkElement).toBeInTheDocument();
})

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
})

