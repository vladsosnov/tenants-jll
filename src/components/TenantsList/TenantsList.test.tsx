import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from 'helpers';
import { TenantsList } from 'components/TenantsList';
import { tenants } from 'mocks';

describe('TenantsList component', () => {
  it('Should show tenants list', () => {
    renderWithRouter(<TenantsList tenants={tenants} />);

    expect(screen.getByText('t1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('t1'));
    expect(window.location.pathname).toEqual('/details/t1');

    expect(screen.getByText('t2')).toBeInTheDocument();
    fireEvent.click(screen.getByText('t2'));
    expect(window.location.pathname).toEqual('/details/t2');
  });
});
