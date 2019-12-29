import React from 'react';
import { Grid } from '@material-ui/core';
import {styles} from './SideBarButton.styles.js'
import { withStyles } from '@material-ui/core/styles';

function SideBarButton(prop) {

    const { 
        classes,
        buttonName,
        buttonIcon } = prop; 
        
    return (
        <div className ={classes.sideBarButtonContainer}>
            <Grid container>
                <Grid item>
                    <div>
                        <div>{buttonIcon}</div>
                    </div>
                </Grid>
                <Grid item>
                    <div>
                        <div className={classes.buttonText} href="#">{buttonName}</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default withStyles(styles)(SideBarButton);