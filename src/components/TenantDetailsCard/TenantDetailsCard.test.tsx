import { screen } from '@testing-library/react';
import { renderWithRouter } from 'helpers';
import { TenantDetailsCard } from 'components/TenantDetailsCard';
import { tenants } from 'mocks';

describe('TenantDetailCard component', () => {
  it('Should show TenantDetailCard', () => {
    renderWithRouter(<TenantDetailsCard tenant={tenants[0]} />);

    expect(screen.getByText('Tenant 1')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });
});
