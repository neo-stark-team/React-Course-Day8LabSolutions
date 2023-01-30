import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/defaultProps/i);
  expect(linkElement).toBeInTheDocument();
})

test('test_case02', () => {
  render(<App />);
  const checkText = screen.getAllByText(/label text/i);
  expect(checkText[0]).toBeInTheDocument();
})


