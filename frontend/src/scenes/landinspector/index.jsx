import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import LogoutIcon from '@mui/icons-material/Logout';
import Dashboardpage from './dashboardpage';
import VerifyUser from './verifyuser';
import VerifyLandPage from './verifylandpage';
import TransferOwnershipPage from './transferownershippage';
import { VerifiedUser } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLiPage } from 'state';
import { useEffect } from "react";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function LandInspectorDashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLiPage({LI_page: 1}));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText>Stan Lee</ListItemText>
            </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => {dispatch(setLiPage({LI_page: 1}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setLiPage({LI_page: 2}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <VerifiedUser/>
                </ListItemIcon>
                <ListItemText>Verify User</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setLiPage({LI_page: 3}))}}>
            <ListItemButton>
                <ListItemIcon>
                  <WhereToVoteIcon/>
                </ListItemIcon>
                <ListItemText>Verify Land</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setLiPage({LI_page: 4}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <PublishedWithChangesIcon/>
                </ListItemIcon>
                <ListItemText>Transfer Ownership</ListItemText>
            </ListItemButton>
        </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem disablePadding onClick={() => navigate("/")}> 
                <ListItemButton >
                    <ListItemIcon>
                        <LogoutIcon/>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const pageno = useSelector((state) => state.LI_page);
  // console.log(pageno);
  const content = (pageno) => {
    switch(pageno) {
      case 1:
        return <Dashboardpage/>;
      case 2:
        return <VerifyUser/>;
      case 3:
        return <VerifyLandPage/>
      case 4:
        return <TransferOwnershipPage/>
      default:
        return <Dashboardpage/>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Land Inspector Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {content(pageno)}
      </Box>
    </Box>
  );
}