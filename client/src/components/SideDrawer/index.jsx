import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HistoryIcon from '@material-ui/icons/History';
import AUX from '../../HOC/aux'
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  myLinks: {
    color: 'inherit',
    cursor: 'inherit',
    textDecoration: 'inherit'
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <NavLink className={classes.myLinks} to='/'>
            <ListItem button  key='home'>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
        </NavLink>
        <NavLink className={classes.myLinks} exact to='/curency-converter'>
            <ListItem button  key='curency-converter'>
              <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
              <ListItemText primary='Curency Converter' />
            </ListItem>
        </NavLink>
        <NavLink className={classes.myLinks} exact to='/history'>
            <ListItem button  key='history'>
              <ListItemIcon><HistoryIcon /></ListItemIcon>
              <ListItemText primary='History' />
            </ListItem>
        </NavLink>
      </List>
      <Divider />
    </div>
  );

  return (
    <AUX>
      <IconButton onClick={toggleDrawer('right', true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </AUX>
  );
}
