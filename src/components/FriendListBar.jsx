import React from 'react'
import { classes } from 'istanbul-lib-coverage'
import { withStyles } from '@material-ui/core/styles';
import {styles} from './FriendListBar.styles.js'

function FriendListBar(props) {
    const {classes} = props;
    return (
        <div className={classes.listContainer}>
            
        </div>
    )
}


export default withStyles(styles)(FriendListBar);