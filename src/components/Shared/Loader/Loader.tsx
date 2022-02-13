import { CircularProgress } from '@material-ui/core';
import type { FC } from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return <>{isLoading && <CircularProgress data-testid="loader" />}</>;
};
