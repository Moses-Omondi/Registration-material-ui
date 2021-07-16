import React from 'react'

import { Container, Paper, Grid, Avatar, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: '20px',
        height: '70vh',
        width: '80%',
        margin: '20px auto'
    },
    lock: {
        backgroundColor: '#3f51b5'
    },
    signUpFont: {
        marginBottom: '20px'
    },
    signUpField : {
        marginBottom: '10px'
    },
    signUpRegister: {
        margin: '20px 0'
    }
  }));

const Signup = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='sm'>
            <Grid>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid align='center'>
                        <Avatar className={classes.lock}>
                            <LockOpenRoundedIcon />
                        </Avatar>
                        <div className={classes.signUpFont}>
                            <h2>Sign Up</h2>
                        </div>
                    </Grid>
                    <TextField
                        id="outlined-basic" 
                        label="email" 
                        type='text' 
                        variant="outlined" 
                        fullWidth
                        className={classes.signUpField}
                    />
                    <TextField
                        id="outlined-basic" 
                        label="password" 
                        type='password' 
                        variant="outlined" 
                        fullWidth
                        className={classes.signUpField}
                    />
                    <TextField
                        id="outlined-basic" 
                        label="password" 
                        type='password' 
                        variant="outlined" 
                        fullWidth
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="I accept all the terms and conditions"
                    />


                    <Button variant="contained" color="primary" fullWidth className={classes.signUpRegister}>
                        Register
                    </Button>

                </Paper>
            </Grid>
        </Container>
    )
}

export default Signup
