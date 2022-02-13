import { Tenants } from 'pages/Tenants';
import { TenantItem } from 'components/TenantItem';
import { tenants } from 'mocks';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Tenants',
  component: Tenants,
} as ComponentMeta<typeof Tenants>;

const Template = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      {tenants.map((tenant) => (
        <TenantItem key={tenant.id} tenant={tenant} />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
