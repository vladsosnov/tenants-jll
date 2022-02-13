import { Box, Card, CardContent, Typography } from '@mui/material';
import Avatar from 'react-avatar';
import type { FC } from 'react';
import type { Tenant } from 'types';

interface TenantDetailsCardProps {
  tenant: Tenant;
}

export const TenantDetailsCard: FC<TenantDetailsCardProps> = ({ tenant }) => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            {tenant.name}
          </Typography>
          <Avatar size="42" round name={tenant.code} />
        </Box>
        <Typography>{tenant.status}</Typography>
        <Typography variant="body1" component="div">
          {tenant.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
