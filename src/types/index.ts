type TenantType = 'REAL' | 'DEMO';
type TenantStatus = 'ACTIVE' | 'NOT_ACTIVE';

export interface Tenant {
  id: string;
  name: string;
  description: string;
  code: string;
  type: TenantType;
  status: TenantStatus;
}
