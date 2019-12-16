import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: 'transparent',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  item: {
    color: "white",
    textDecoration: 'none',
    width: '6rem',
  }
}));

const Header = ({ location }) => {
  const classes = useStyles();
  
  return (
    <div className="w-full">
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dreamsoftware SSR
          </Typography>
          <Link className={classes.item} to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link className={classes.item} to="/about">
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)