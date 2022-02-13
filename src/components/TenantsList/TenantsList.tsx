import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import type { Tenant } from 'types';
import type { FC } from 'react';
import { TenantItem } from 'components/TenantItem';

interface TenantListProps {
  tenants: Tenant[];
}

export const TenantsList: FC<TenantListProps> = ({ tenants }) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {tenants.map((tenant) => (
        <ListItem
          sx={{
            maxWidth: '300px',
            margin: '8px 16px',
            padding: '0 !important',
            cursor: 'pointer',
          }}
          key={tenant.id}
        >
          <NavLink
            className="flexContainerItemLink"
            to={`/details/${tenant.id}`}
          >
            <TenantItem tenant={tenant} />
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};
