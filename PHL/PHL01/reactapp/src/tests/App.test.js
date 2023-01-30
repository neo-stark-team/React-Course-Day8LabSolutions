import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Movie/i);
  expect(linkElement[0]).toBeInTheDocument();
})
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/Spiderman/i);
  expect(linkElement).toBeInTheDocument();
})
test('test_case03', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Movie Details not found/i);
  expect(linkElement[0]).toBeInTheDocument();
})


