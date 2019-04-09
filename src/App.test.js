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

  // it('returns +1 when clicked on foul button and strikes < 2', async () => {
  //   const wrap = rtl.render(<App />);
  //   rtl.fireEvent.click(wrap.getByText(/foul/i));
  //   const strike = await wrap.queryByTestId('strikes');
  //   console.log(strike);
  //   expect(strike).toContain(1);
  // });
});
