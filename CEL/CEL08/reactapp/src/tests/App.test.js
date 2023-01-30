import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Dollar/i);
  expect(linkElement[0]).toBeInTheDocument();
})
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/INR/i);
  expect(linkElement[0]).toBeInTheDocument();
})
test('test_case03', () => {
  render(<App />);
  const plusBtn = screen.getAllByRole('button', {name: '+'});
  expect(plusBtn[0]).toBeInTheDocument();
})

test('test_case04', () => {
  render(<App />);
  const minusBtn = screen.getAllByRole('button', {name: '-'});
  expect(minusBtn[1]).toBeInTheDocument();
})

