import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {styles} from './Login.styles.js'

function Login(props) {
    const {classes} = props;
    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginTitle}>
                <h1>GradWave </h1>
            </div>
        </div>
    )
}

export default withStyles(styles)(Login);