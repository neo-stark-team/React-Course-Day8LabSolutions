import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ref/i);
  expect(linkElement).toBeInTheDocument();
})
test('test_case02', () => {
  render(<App />);
  const inputEl = screen.getByTestId("refText");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
})
test('test_case03', () => {
  render(<App />);
  const plusBtn = screen.getByRole('button');
  expect(plusBtn).toBeInTheDocument();
})



