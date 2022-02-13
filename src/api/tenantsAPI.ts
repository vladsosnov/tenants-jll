import { tenantsClient } from './tenantsClient';
import type { Tenant } from 'types';

export const tenantsAPI = {
  getTenants: () => tenantsClient.get<Tenant[]>('/tenants'),
  getTenant: (id: string) => tenantsClient.get<Tenant[]>(`/tenants?id=${id}`),
};
