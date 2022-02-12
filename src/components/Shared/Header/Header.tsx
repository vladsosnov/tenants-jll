import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'var(--pink) !important',
      }}
    >
      <Toolbar disableGutters variant="dense">
        <Typography
          sx={{ display: 'block', paddingLeft: '16px', cursor: 'default' }}
          variant="h6"
          noWrap
        >
          <NavLink className={styles.headerLink} to="/">
            Welcome, Tenants App!
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
