import { useEffect, useState } from 'react';
import { tenantsAPI } from 'api';
import { Header } from 'components/Shared';
import type { Tenant } from 'types';
import { Pagination } from '@mui/material';
import { usePagination } from 'hooks/usePagination';

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
    <div>
      <Header />
      <ul>
        {tenantsUP.currentData().map((v) => {
          return (
            <li key={v.id}>
              <div>${v.id}</div>
            </li>
          );
        })}
      </ul>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};
