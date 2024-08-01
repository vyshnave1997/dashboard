import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Chart from "../components/Chart";
import DataTable from "../components/DataTable";
import Notifications from "../components/Notifications";
import "./Home.css";

const Home = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  const showNotification = () => {
    setNotificationOpen(true);
  };

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className="paper">
            <h2>Widget 1</h2>
            <p>Widget content here</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="paper">
            <h2>Widget 2</h2>
            <p>Widget content here</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="paper">
            <h2>Widget 3</h2>
            <p>Widget content here</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <h2>Chart</h2>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <h2>Data Table</h2>
            <DataTable />
          </Paper>
        </Grid>
      </Grid>
      <button onClick={showNotification}>Show Notification</button>
      <Notifications
        open={notificationOpen}
        handleClose={handleNotificationClose}
        message="This is a notification"
        severity="info"
      />
    </div>
  );
};

export default Home;
