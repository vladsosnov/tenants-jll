import { tenantsClient } from './tenantsClient';

export const tenantsAPI = {
  getTenants: () => tenantsClient.get('/tenants'),
  getTenant: (id: string) => tenantsClient.get(`/tenants?id=${id}`),
};
