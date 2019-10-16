import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SnackBarCentered from "../../components/Snackbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 32px'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& p': {
      margin: 0,
      fontSize: '16px'
    }
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}><SnackBarCentered/></Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Paper className={classes.paper}><p>xs=6</p></Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Paper className={classes.paper}><p>xs=6</p></Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Paper className={classes.paper}><p>xs=3</p></Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Paper className={classes.paper}><p>xs=3</p></Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Paper className={classes.paper}><p>xs=3</p></Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Paper className={classes.paper}><p>xs=3</p></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
