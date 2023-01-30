import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
})

test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/Angular/i);
  expect(linkElement).toBeInTheDocument();
})

test('test_case03', () => {
  render(<App />);
  const checkText = screen.getAllByText(/Learning/i);
  expect(checkText[0]).toBeInTheDocument();
})


