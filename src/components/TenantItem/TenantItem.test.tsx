import { screen } from '@testing-library/react';
import { renderWithRouter } from 'helpers';
import { TenantItem } from 'components/TenantItem';
import { tenants } from 'mocks';

describe('TenantItem component', () => {
  it('Should show TenantItem', () => {
    renderWithRouter(<TenantItem tenant={tenants[1]} />);

    expect(screen.getByText('not_active')).toBeInTheDocument();
    expect(screen.getByText('demo')).toBeInTheDocument();
  });
});
