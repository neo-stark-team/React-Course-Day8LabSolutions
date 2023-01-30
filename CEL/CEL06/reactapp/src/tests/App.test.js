import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Arithmetic/i);
  expect(linkElement).toBeInTheDocument();
})
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByTestId('formButtonAdd');
  expect(linkElement).toBeInTheDocument();
})
test('test_case03', () => {
  render(<App />);
  const linkElement = screen.getByTestId('formButtonSubtract');
  expect(linkElement).toBeInTheDocument();
})


