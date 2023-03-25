import * as React from 'react';
import { useNavigate } from "react-router-dom";
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
import AddLocationIcon from '@mui/icons-material/AddLocation';
import TerrainIcon from '@mui/icons-material/Terrain';
import PersonIcon from '@mui/icons-material/Person';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import Dashboardpage from './dashboardpage';
import AddLandpage from './addlandpage/index';
import MyLandpage from './myland';
import LandGallerypage from './landgallery';
import Receivedpage from './receivedrequest';
import Sentpage from './sent';
import { useDispatch, useSelector } from "react-redux";
import { setUserPage } from 'state';
import { useEffect } from "react";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function UserDashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserPage({User_page: 1}));
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
                <ListItemText>Tony Stark</ListItemText>
            </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => {dispatch(setUserPage({User_page: 1}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setUserPage({User_page: 2}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <AddLocationIcon/>
                </ListItemIcon>
                <ListItemText>Add Land</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setUserPage({User_page: 3}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <TerrainIcon/>
                </ListItemIcon>
                <ListItemText>My Land</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setUserPage({User_page: 4}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <TerrainIcon/>
                </ListItemIcon>
                <ListItemText>Land Gallery</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setUserPage({User_page: 5}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <CallReceivedIcon/>
                </ListItemIcon>
                <ListItemText>Received Request</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {dispatch(setUserPage({User_page: 6}))}}>
            <ListItemButton>
                <ListItemIcon>
                    <SendIcon/>
                </ListItemIcon>
                <ListItemText>Sent Land Request</ListItemText>
            </ListItemButton>
        </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem disablePadding onClick={() => navigate("/")}> 
                <ListItemButton>
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
  const pageno = useSelector((state) => state.User_page);

  const content = (pageno) => {
    switch(pageno) {
      case 1:
        return <Dashboardpage/>;
      case 2:
        return <AddLandpage/>;
      case 3:
        return <MyLandpage/>;
      case 4:
        return <LandGallerypage/>;
      case 5:
        return <Receivedpage/>;
      case 6:
        return <Sentpage/>;   
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
            User Dashboard
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