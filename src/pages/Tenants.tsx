import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Shared';
import { Pagination, Container } from '@mui/material';
import { usePagination } from 'hooks/usePagination';
import { TenantsList } from 'components/TenantsList';
import { tenantsAPI } from 'api';
import type { Tenant } from 'types';
import 'style.css';

const PER_PAGE = 20;

export const Tenants = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const page = Number(searchParams.get('page')) || 1;
  const pagination = usePagination(tenants, PER_PAGE, page);

  const getTenants = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await tenantsAPI.getTenants();
      setTenants(response.data);
    } catch (err) {
      console.log('err', err);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTenants();
  }, [page, getTenants]);

  const handleChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    navigate(`?page=${newPage}`);
    pagination.navigate(newPage);
  };

  return (
    <Container className="tenantsContainer">
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <TenantsList tenants={pagination.currentData()} />
      )}
      <Pagination
        count={pagination.maxPage}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        className="tenantsPagination"
        onChange={handleChange}
      />
    </Container>
  );
};
