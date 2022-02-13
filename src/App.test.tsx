import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('Render main route', async () => {
    render(<App />);
    expect(window.location.pathname).toEqual('/');
  });

  it('Render header', async () => {
    render(<App />);
    const appTitle = screen.getByText(/Welcome, Tenants App!/i);
    expect(appTitle).toBeInTheDocument();
    fireEvent.click(appTitle);
    expect(window.location.pathname).toEqual('/');
  });
});
