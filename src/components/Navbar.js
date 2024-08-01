import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import UserProfile from "./UserProfile";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Dashboard
        </Typography>
        <div className="spacer"></div>
        <UserProfile />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
