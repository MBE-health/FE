import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/learn/i)).toBeInTheDocument();
});
