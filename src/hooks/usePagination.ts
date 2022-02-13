import { useState } from 'react';
import type { Tenant } from 'types';

export const usePagination = (
  data: Tenant[],
  itemsPerPage: number,
  initialPage: number,
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return data.slice(begin, end);
  };

  const navigate = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };

  return { navigate, currentData, currentPage, maxPage };
};
