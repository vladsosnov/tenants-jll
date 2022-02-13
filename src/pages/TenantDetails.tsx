import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TenantDetailsCard } from 'components/TenantDetailsCard';
import { Loader } from 'components/Shared';
import { Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { tenantsAPI } from 'api';
import type { Tenant } from 'types';
import 'style.css';

export const TenantDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const tenantId: string = params.tenantId || '';

  const getTenant = useCallback(async () => {
    try {
      const response = await tenantsAPI.getTenant(tenantId);

      setTenant(response.data[0]);
    } catch (err) {
      console.log('err', err);
    }

    setIsLoading(false);
  }, [tenantId]);

  useEffect(() => {
    getTenant();
  }, [getTenant]);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Box
      sx={{
        maxWidth: '768px',
      }}
    >
      {tenant && (
        <Box
          sx={{
            margin: '32px !important',
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
          >
            Back to Tenants
          </Button>
          {tenant.name ? (
            <TenantDetailsCard tenant={tenant} />
          ) : (
            <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
              Empty state
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
