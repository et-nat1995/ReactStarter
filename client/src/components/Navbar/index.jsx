import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

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
  },
  myLinks: {
    color: 'inherit',
    cursor: 'inherit',
    textDecoration: 'inherit'
  }
}));

export default  (props) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar className={classes.MyAppBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <NavLink className={classes.myLinks} to='/'>
            <Button color="inherit">
                Home
            </Button>
          </NavLink>
          <NavLink className={classes.myLinks} exact to='/curency-converter'>
            <Button color="inherit">
                Curency Converter
            </Button>
          </NavLink>
          <NavLink className={classes.myLinks} exact to='/history'>
            <Button color="inherit">
                History
            </Button>
          </NavLink>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
