import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Login.styles.js'
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

function Login(props) {
    const {classes} = props;
    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginTitle}>
                <h1>Grad <div className={classes.waveIcon}></div> Wave </h1>
            </div>
            <div>
            <Paper className={classes.loginCard} variant="outlined">
                Login
            </Paper>
            </div>
        </div>
    )
}

export default withStyles(styles)(Login);