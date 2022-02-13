import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from 'helpers';
import { TenantsList } from 'components/TenantsList';
import { tenants } from 'mocks';

describe('Tenants component', () => {
  it('Should show tenants list', () => {
    renderWithRouter(<TenantsList tenants={tenants} />);

    expect(screen.getByText('Tenant 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Tenant 1'));
    expect(window.location.pathname).toEqual('/tenant/t1');

    expect(screen.getByText('Tenant 2')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Tenant 2'));
    expect(window.location.pathname).toEqual('/tenant/t2');
  });

  it('Should show pagination', () => {
    renderWithRouter(<TenantsList tenants={tenants} />);
    expect(screen.getByTestId('tenantsList:pagination')).toBeInTheDocument();
    expect(screen.getByLabelText(/page 1/i)).toBeInTheDocument();
  });
});
