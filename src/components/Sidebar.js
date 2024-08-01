import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className="menu-button"
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={handleDrawerToggle}
        className="drawer"
      >
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Link to="/" className="link">
                  Home
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Link to="/settings" className="link">
                  Settings
                </Link>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
