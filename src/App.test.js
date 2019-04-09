import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from 'react-testing-library';

afterEach(rtl.cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('returns +1 strike when clicked on foul button', () => {
    const wrap = rtl.render(<App />);
    rtl.fireEvent.click(wrap.getByText(/foul/i));
    expect(wrap.getByText(/1/i));
  });
});

it('returns +1 strike when clicked on strike button', () => {
  const wrap = rtl.render(<App />);
  rtl.fireEvent.click(wrap.getByText(/strike/i));
  expect(wrap.getByText(/1/i));
});

it('returns resets strike and balls when clicked on hit button', () => {
  const wrap = rtl.render(<App />);
  rtl.fireEvent.click(wrap.getByText(/hit/i));
  expect(wrap.getByText(/0/i));
});

it('returns +1 balls when clicked on ball button', () => {
  const wrap = rtl.render(<App />);
  rtl.fireEvent.click(wrap.getByText(/ball/i));
  expect(wrap.getByText(/0/i));
});
