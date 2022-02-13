import { render } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('Render main route', async () => {
    render(<App />);
    expect(window.location.pathname).toEqual('/');
  });
});
