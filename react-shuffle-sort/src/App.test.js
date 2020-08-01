import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders shuffle numbers grid', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mukul Kishore/i);
  expect(linkElement).toBeInTheDocument();
});
