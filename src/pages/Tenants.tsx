import { useEffect, useState } from 'react';
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Header, Loader } from 'components/Shared';
import { Pagination, List, ListItem, Container } from '@mui/material';
import { TenantItem } from 'components/TenantItem';
import { usePagination } from 'hooks/usePagination';
import type { Tenant } from 'types';
import { tenantsAPI } from 'api';
import type { AxiosResponse } from 'axios';
import 'style.css';

const PER_PAGE = 20;

interface LocationState {
  list: Tenant[];
}

export const Tenants = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageQuery: number = Number(searchParams.get('page')) || 1;
  const [tenants, setTenants] = useState<Tenant[] | []>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const state = location.state as LocationState;
  const count = Math.ceil(tenants.length / PER_PAGE);
  const tenantsUP = usePagination(tenants, PER_PAGE);

  useEffect(() => {
    if (pageQuery) {
      return setPage(pageQuery);
    }
  }, [page, pageQuery]);

  useEffect(() => {
    if (state && state.list) {
      setTenants(state.list);
      tenantsUP.navigate(page);
      return;
    }

    setIsLoading(true);
    getTenants();
  }, [page, state, tenantsUP]);

  const getTenants = async () => {
    try {
      const response: AxiosResponse<Tenant[]> = await tenantsAPI.getTenants();
      setTenants(response.data);
      navigate('/', { state: { list: tenants } });
    } catch (err) {
      console.log('err', err);
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`, { state: { list: tenants } });
    tenantsUP.navigate(newPage);
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Container className="tenantsContainer">
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {tenantsUP.currentData().map((tenant) => (
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
