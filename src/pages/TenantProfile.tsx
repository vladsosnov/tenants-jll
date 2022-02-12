import { useEffect, useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { tenantsAPI } from 'api';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Avatar from 'react-avatar';
import type { Tenant } from 'types';

export const TenantProfile = () => {
  const navigate = useNavigate();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const tenantId: string = params.tenantId || '';

  useEffect(() => {
    setIsLoading(true);
    getTenant();
  }, []);

  const getTenant = async () => {
    try {
      const response: any = await tenantsAPI.getTenant(tenantId);
      setTenant(response.data[0]);
    } catch (err) {
      console.log('err', err);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="tenantProfile">
      {tenant && (
        <Box>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
          >
            Back to Tenants List
          </Button>
          {tenant.name ? (
            <Card>
              <CardContent>
                <div className="tenantProfileHead">
                  <Typography variant="h6" color="inherit" component="div">
                    {tenant.name}
                  </Typography>
                  <Avatar size="42" round name={tenant.code} />
                </div>
                <Typography>{tenant.code}</Typography>
                <Typography variant="body1" component="div">
                  {tenant.description}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              Empty state
            </div>
          )}
        </Box>
      )}
    </div>
  );
};
