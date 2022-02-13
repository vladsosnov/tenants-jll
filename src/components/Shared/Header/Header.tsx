import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#c4a9df !important',
      }}
    >
      <Toolbar disableGutters variant="dense">
        <Typography
          sx={{ display: 'block', paddingLeft: '16px', cursor: 'default' }}
          variant="h6"
          noWrap
        >
          <NavLink
            className="headerLink"
            style={{ color: '#161616', textDecoration: 'none' }}
            to="/"
          >
            Welcome, Tenants App!
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
