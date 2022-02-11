import type { Tenant } from 'types';
import { tenantsClient } from './tenantsClient';

export const tenantsAPI = {
  getTenants: () => tenantsClient.get<unknown, Tenant[]>(`/tenants`),
};