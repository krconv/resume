import React from "react";

import Grid from "@material-ui/core/Grid";

import About from "./About";
import Education from "./Education";
import Header from "./Header";
import Interests from "./Interests";
import Jobs from "./Jobs";
import SideProjects from "./SideProjects";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(2, 3)
  }
}));

function Resume() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={7}>
          <About />
        </Grid>
        <Grid item xs={5}>
          <Interests />
        </Grid>
        <Grid item xs={12}>
          <Jobs />
        </Grid>
        <Grid item xs={12}>
          <SideProjects />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Resume;
