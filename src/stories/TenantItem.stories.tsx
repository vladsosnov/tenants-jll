import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TenantItem } from 'components/TenantItem';
import type { Tenant } from 'types';

const tenant: Tenant = {
  id: 't8',
  name: 'Tenant 8',
  code: 'Tenant_8',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  status: 'NOT_ACTIVE',
  type: 'REAL',
};

export default {
  title: 'Tenant Item',
  component: TenantItem,
} as ComponentMeta<typeof TenantItem>;

const Template: ComponentStory<typeof TenantItem> = () => (
  <TenantItem tenant={tenant} />
);

export const Default = Template.bind({});
