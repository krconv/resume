import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Markdown from "./Markdown";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(1)
  },
  title: {
    marginRight: theme.spacing(1),
    display: "inline"
  },
  where: {
    display: "inline"
  },
  short: {
    display: "inline"
  }
}));

function Item({ title, where, when, short = false, content }) {
  const classes = useStyles();

  let timestamp;
  if (when.from && when.to) {
    timestamp = `${when.from} to ${when.to}`;
  } else if (when.to) {
    timestamp = when.to;
  }

  return (
    <Grid container className={classes.grid}>
      <Grid item>
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>
        {!short ? (
          <Typography className={classes.where} variant="body1">
            {where}
          </Typography>
        ) : (
          <Markdown className={classes.short}>{content}</Markdown>
        )}
      </Grid>
      <Grid item xs />
      <Grid item>
        <Typography className={classes.when} variant="body1">
          {timestamp}
        </Typography>
      </Grid>

      {!short && (
        <Grid item xs={12}>
          <Markdown>{content}</Markdown>
        </Grid>
      )}
    </Grid>
  );
}

export default Item;
