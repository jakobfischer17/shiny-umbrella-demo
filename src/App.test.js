import { render, screen } from '@testing-library/react';
import App from './App';

test('renders multilingual greeter heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Multilingual Greeter/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders greeting in English by default', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hello!/i);
  expect(greetingElement).toBeInTheDocument();
});

test('renders name input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Your name/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders all language buttons', () => {
  render(<App />);
  const englishButton = screen.getByRole('button', { name: /English/i });
  const spanishButton = screen.getByRole('button', { name: /Español/i });
  const frenchButton = screen.getByRole('button', { name: /Français/i });
  
  expect(englishButton).toBeInTheDocument();
  expect(spanishButton).toBeInTheDocument();
  expect(frenchButton).toBeInTheDocument();
});
