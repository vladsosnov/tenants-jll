import Avatar from 'react-avatar';
import { Card } from '@material-ui/core';
import { CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { Tenant } from 'types';
import type { FC } from 'react';
import './tenantItem.css';

interface TenantItemProps {
  tenant: Tenant;
}

export const TenantItem: FC<TenantItemProps> = ({ tenant }) => {
  const tenantItemHeadClass = tenant.status
    ? 'tenantItemHead'
    : 'tenantItemEmptyHead';

  return (
    <Card className="tenantItem">
      <CardContent className={tenantItemHeadClass}>
        <Avatar size="42" round name={tenant.code} />
        <Box>
          <Typography variant="subtitle2" component="div">
            Id: <strong>{tenant.id}</strong>
          </Typography>
          {tenant.type && (
            <Typography variant="subtitle2" component="div">
              Type: <strong>{tenant.type.toLowerCase()}</strong>
            </Typography>
          )}
          {tenant.status && (
            <Typography variant="subtitle2" component="div">
              Status: <strong>{tenant.status.toLowerCase()}</strong>
            </Typography>
          )}
        </Box>
      </CardContent>
      {tenant.description && (
        <Typography variant="caption">{`${tenant.description?.substr(
          0,
          98,
        )}...`}</Typography>
      )}
    </Card>
  );
};
