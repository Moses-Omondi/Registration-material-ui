import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PanoramaHorizontalIcon from '@material-ui/icons/PanoramaHorizontal';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  entry : { 
      fontFamily: 'Source Sans Pro'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <div className={classes.entry}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <PanoramaHorizontalIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        CreditMax
                    </Typography>
                    <Button color='inherit' size='large'>Login</Button>
                    <Button color="inherit" size="large">Sign Up</Button>
                </Toolbar>
            </AppBar>  
        </div>
        <Signup />
        
    </div>
  );
}
