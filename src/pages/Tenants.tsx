import { useEffect, useState } from 'react';
import { tenantsAPI } from 'api';
import { Header } from 'components/Shared';
import type { Tenant } from 'types';
import { Pagination, List, ListItem, Container } from '@mui/material';
import { usePagination } from 'hooks/usePagination';
import { TenantItem } from 'components/TenantItem/TenantItem';
import './style.css';

const PER_PAGE = 20;

export const Tenants = () => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [page, setPage] = useState(1);

  const count = Math.ceil(tenants.length / PER_PAGE);
  const tenantsUP = usePagination(tenants, PER_PAGE);

  useEffect(() => {
    const getTenants = async () => {
      const res: any = await tenantsAPI.getTenants();
      setTenants(res.data);
    };

    getTenants();
  }, []);

  const handleChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    tenantsUP.jump(newPage);
  };

  return (
    <Container className="tenantsContainer">
      <Header />
      <List className="flexContainer">
        {tenantsUP.currentData().map((tenant) => (
          <ListItem className="flexContainerItem" key={tenant.id}>
            <TenantItem item={tenant} />
          </ListItem>
        ))}
      </List>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className="tenantsPagination"
      />
    </Container>
  );
};
