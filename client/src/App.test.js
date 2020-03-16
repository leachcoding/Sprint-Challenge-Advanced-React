import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rt1.cleanup);

it('renders without crashing, is Class App', () => {
  const wrapp = rt1.render(<App />);
  const element1 = wrapper.getByTestId('app-test-id');
  expect(element1).toHaveClass('App');
});
