import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fetchData } from "./constants";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('fetchData', () =>{
  it('should still return a result an aray even if no key is given, when callback is return', async () => {
    expect.assertions(1);
    
    /** continue reviewing documentation re async testing */
  })
})