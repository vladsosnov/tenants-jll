import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import 'style.css';

export const NotFound = () => {
  return (
    <Box>
      <Typography variant="h1" component="h2">
        NotFound
      </Typography>
      <NavLink to="/">Go to the home page!</NavLink>
    </Box>
  );
};
