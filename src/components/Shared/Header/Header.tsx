import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import styles from './header.module.css';

const StyledAppTitle = styled(Typography)`
  display: block;
  padding-left: 16px;
  cursor: default;
`;

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      className={styles.header}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar disableGutters variant="dense">
        <StyledAppTitle variant="h6" noWrap>
          Welcome, Tenants App!
        </StyledAppTitle>
      </Toolbar>
    </AppBar>
  );
};
