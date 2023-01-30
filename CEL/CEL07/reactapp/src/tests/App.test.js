import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/IamNEO/i);
  expect(linkElement).toBeInTheDocument();
})
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/Greetings/i);
  expect(linkElement).toBeInTheDocument();
})
test('test_case03', () => {
  render(<App />);
  const linkElement = screen.getByText(/Message/i);
  expect(linkElement).toBeInTheDocument();
})


