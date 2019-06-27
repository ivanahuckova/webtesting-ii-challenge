import React from 'react';
import * as rtl from 'react-testing-library';

import Display from './Display';

afterEach(rtl.cleanup);

describe('Display', () => {
  it('contains strike score', () => {
    const wrap = rtl.render(<Display />);
    expect(wrap.getByText(/strike/i));
  });
  it('contains ball score', () => {
    const wrap = rtl.render(<Display />);
    expect(wrap.getByText(/ball/i));
  });
});
