import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, makeStyles } from "@material-ui/styles";

import Resume from "./Resume";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans", "Calibri", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: "100"
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "400"
    },
    h3: {
      fontSize: "1.1rem",
      fontWeight: "500"
    },
    body1: {
      fontWeight: "300"
    }
  },
  shape: {
    borderRadius: "1px"
  }
});

const useStyles = makeStyles({
  page: {
    width: "8.5in"
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center">
        <Box display="none" displayPrint="block">
          <Resume className={classes.resume} />
        </Box>
        <Box display="block" displayPrint="none">
          <Paper className={classes.page} display="block" displayPrint="none">
            <Resume className={classes.resume} />
          </Paper>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
