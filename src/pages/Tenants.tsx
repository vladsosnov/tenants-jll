import { useEffect, useState, useMemo } from 'react';
import { tenantsAPI } from 'api';
import { Header } from 'components/Shared';
import type { Tenant } from 'types';
import { Pagination, List, ListItem, Container } from '@mui/material';
import { usePagination } from 'hooks/usePagination';
import { TenantItem } from 'components/TenantItem/TenantItem';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './style.css';

const PER_PAGE = 20;

interface LocationState {
  list: Tenant[];
}

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const Tenants = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tenants, setTenants] = useState<Tenant[] | []>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const state = location.state as LocationState;
  const query = useQuery();
  const count = Math.ceil(tenants.length / PER_PAGE);
  const tenantsUP = usePagination(tenants, PER_PAGE);

  useEffect(() => {
    if (query.get('page')) {
      return setPage(Number(query.get('page')));
    }
  }, [query]);

  useEffect(() => {
    if (state && state.list) {
      setTenants(state.list);
      tenantsUP.jump(page);
      return;
    }

    setIsLoading(true);
    getTenants();
  }, [state, page]);

  const getTenants = async () => {
    try {
      const response: any = await tenantsAPI.getTenants();
      setTenants(response.data);
    } catch (err) {
      console.log('err', err);
    }
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    navigate(`/?page=${newPage}`, { state: { list: tenants } });
    tenantsUP.jump(newPage);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container className="tenantsContainer">
      <Header />
      <List className="flexContainer">
        {tenantsUP.currentData().map((tenant) => (
          <ListItem className="flexContainerItem" key={tenant.id}>
            <NavLink
              className="flexContainerItemLink"
              to={`/profile/${tenant.id}`}
            >
              <TenantItem item={tenant} />
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
        className="tenantsPagination"
        onChange={handleChange}
      />
    </Container>
  );
};
