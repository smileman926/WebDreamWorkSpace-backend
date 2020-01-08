import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

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
  bg: {
    backgroundColor: '#1976d2',
    transition:'all .7s'

  },
  bg0: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },

}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="fixed" className={props.opacity ? classes.bg : classes.bg0}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Trello
          </Typography>

          <Link to="/login"><Button color="inherit" style={{color:'white'}}>Login</Button></Link>
          <Link to="/signup"><Button color="inherit" style={{backgroundColor: 'white', color: 'blue'}}>SignUp</Button></Link>
        </Toolbar>
      </AppBar>

    </div>
  );
}
