import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  },
  title: {}
}));

function Section({ title, children }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h2" gutterBottom>
        {title}
      </Typography>
      <Box children={children} />
    </Paper>
  );
}

export default Section;
