import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Login.styles.js'
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Login(props) {
    const {classes} = props;
    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginTitle}>
                <h1>Grad <div className={classes.waveIcon}></div> Wave </h1>
            </div>
            <div>
                <Grid container>
                    <Grid item lg={6}>
                        <div className={classes.subText}>
                            A place for students or graduates to connect, share and grow...
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <Paper className={classes.loginCard} variant="outlined">
                            <Grid container>
                                <Grid item lg={12}>
                                    <span>
                                        Login
                                    </span>
                                </Grid>
                                <Grid item lg={12}>
                                    <div className>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <TextField id="standard-basic" label="Email"/>
                                        </form>
                                    </div>
                                </Grid>
                                <Grid item lg={12}>
                                    <div>
                                        <form className={classes.root} noValidate autoComplete="off">
                                        <TextField id="standard-basic" label="Password"/>  
                                        </form>
                                    </div>
                                </Grid>
                                <Grid item lg={6}>
                                    <Link to="/CreateAccount">Don't have an account?</Link>
                                </Grid>
                                <Grid item lg={6}>  
                                     <Button component={Link} to="/Dashboard" className={classes.button} variant="contained" color="#077B75">
                                         <AccountCircleIcon/>Login</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
           
            </div>
        </div>
    )
}

export default withStyles(styles)(Login);