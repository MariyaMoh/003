import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('list contains 5 names', () => {
  render(<App />);

  const listElement = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem');

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('web-tooling');
  expect(listItems.length).toEqual(5);
});
