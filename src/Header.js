import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    marginBottom: "4px"
  },
  subtitle: {
    textAlign: "center"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.title} variant="h1">
        Kodey Converse
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        kodey@krconv.com | github.com/krconv | linkedin.com/in/krconv
      </Typography>
    </Box>
  );
}

export default Header;
