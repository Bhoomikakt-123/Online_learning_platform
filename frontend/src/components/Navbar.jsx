import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ForumIcon from '@mui/icons-material/Forum';
import MessageIcon from '@mui/icons-material/Message';
import DownloadIcon from '@mui/icons-material/Download';

const Navbar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
        },
      }}
    >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Online Learning</h2>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={Link} to="/live-sessions">
          <ListItemIcon><LiveTvIcon /></ListItemIcon>
          <ListItemText primary="Live Sessions" />
        </ListItem>
        <ListItem button component={Link} to="/forum">
          <ListItemIcon><ForumIcon /></ListItemIcon>
          <ListItemText primary="Forum" />
        </ListItem>
        <ListItem button component={Link} to="/messages">
          <ListItemIcon><MessageIcon /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemIcon><DownloadIcon /></ListItemIcon>
          <ListItemText primary="Offline Content" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;