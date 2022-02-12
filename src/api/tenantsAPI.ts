import { tenantsClient } from './tenantsClient';

export const tenantsAPI = {
  getTenants: () => tenantsClient.get('/tenants'),
  getTenant: (id: string | undefined) => tenantsClient.get(`/tenants?id=${id}`),
};
