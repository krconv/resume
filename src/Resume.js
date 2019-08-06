import React from "react";

import Grid from "@material-ui/core/Grid";

import Education from "./Education";
import Header from "./Header";
import Jobs from "./Jobs";
import Projects from "./Projects";
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
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Jobs />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Resume;
