import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  MyAppBar: {
    backgroundColor: "#1E88E5",
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar className={classes.MyAppBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/hello-world" color="inherit">Hello</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
