import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { TenantDetailsCard } from 'components/TenantDetailsCard';
import { Loader } from 'components/Shared';
import { Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { tenantsAPI } from 'api';
import type { Tenant } from 'types';
import type { AxiosResponse } from 'axios';
import 'style.css';

interface LocationState {
  tenant: Tenant;
}

export const TenantDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const tenantId: string = params.tenantId || '';

  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    if (state && state.tenant) {
      setTenant(state.tenant);
      return;
    }

    setIsLoading(true);
    getTenant();
  }, []);

  const getTenant = async () => {
    try {
      const response: AxiosResponse<Tenant | any> = await tenantsAPI.getTenant(
        tenantId,
      );

      setTenant(response.data[0]);
    } catch (err) {
      console.log('err', err);
    }

    setIsLoading(false);
  };

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
        <Box>
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
