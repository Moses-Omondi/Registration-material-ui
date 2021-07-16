import React from 'react';
import { Container, Typography, Link, Grid, Paper, Button, Checkbox, FormControlLabel, TextField, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: '20px',
    height: '70vh',
    width: '90%',
    margin: '20px auto'
  },
  avatarStyle: {
    backgroundColor: '#3f51b5'
  },
  formStyle: {
    margin: '10px 0px'
  },
  btnStyle: {
    margin: '20px 0px'
  },
  signIn: {
    marginBottom: '10px'
  }
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid
            align="center"        
          >
            <Avatar className={classes.avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <div className={classes.signIn}>
              <h2>Log In</h2>
            </div>
          </Grid>

          <TextField 
            id="outlined-basic"
            label="email"
            placeholder="email"
            fullWidth 
            type='text'
            required
            variant='outlined'
            className={classes.formStyle}
          />

          <TextField
            id="outlined-basic"
            label="password" 
            placeholder="password"
            fullWidth
            variant='outlined'
            type='password' 
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            
            label="Remember me"
          />

          <Button type='submit' color='primary' fullWidth variant='contained' className={classes.btnStyle}>Log In</Button>

          <Typography> Do you have an account? 
            <Link href='login'>
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Signup
