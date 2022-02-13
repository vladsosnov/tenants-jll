import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Shared';
import { Pagination, Container } from '@mui/material';
import { usePagination } from 'hooks/usePagination';
import { TenantsList } from 'components/TenantsList';
import { tenantsAPI } from 'api';
import type { Tenant } from 'types';
import type { AxiosResponse } from 'axios';
import 'style.css';

const PER_PAGE = 20;

export const Tenants = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageQuery: number = Number(searchParams.get('page')) || 1;
  const [tenants, setTenants] = useState<Tenant[] | []>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const count = Math.ceil(tenants.length / PER_PAGE);
  const tenantsUP = usePagination(tenants, PER_PAGE);

  useEffect(() => {
    if (pageQuery) {
      return setPage(pageQuery);
    }
  }, [page, pageQuery]);

  useEffect(() => {
    getTenants();
  }, [page, tenantsUP]);

  const getTenants = async () => {
    try {
      const response: AxiosResponse<Tenant[]> = await tenantsAPI.getTenants();
      setTenants(response.data);
    } catch (err) {
      console.log('err', err);
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`);
    tenantsUP.navigate(newPage);
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Container className="tenantsContainer">
      <TenantsList tenants={tenantsUP.currentData()} />
      <Pagination
        count={count}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        sx={{ display: 'flex', justifyContent: 'center', margin: '36px 0' }}
        onChange={handleChange}
      />
    </Container>
  );
};
