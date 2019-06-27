import React from 'react';
import * as rtl from 'react-testing-library';

import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dahboard', () => {
  it('contains strike button', () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/strike/i));
  });
  it('contains ball button', () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/ball/i));
  });
  it('contains foul button', () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/foul/i));
  });
  it('contains hit button', () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/hit/i));
  });
});
