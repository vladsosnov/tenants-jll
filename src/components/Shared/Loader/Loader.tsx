import { CircularProgress } from '@material-ui/core';
import { Box } from '@mui/material';
import type { FC } from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return <Box>{isLoading && <CircularProgress />}</Box>;
};
