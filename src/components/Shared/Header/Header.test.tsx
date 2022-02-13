import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from 'helpers';
import { Header } from 'components/Shared';

describe('Header component', () => {
  it('Should show header', () => {
    renderWithRouter(<Header />);

    const headerTitle = screen.getByText('Welcome, Tenants App!');
    expect(headerTitle).toBeInTheDocument();
    fireEvent.click(headerTitle);
    expect(window.location.pathname).toEqual('/');
  });
});
