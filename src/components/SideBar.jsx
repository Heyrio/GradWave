import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './SideBar.styles.js'
import { Grid } from '@material-ui/core';
import SideBarButton from './SideBarButton'

 function SideBar(props) {
   const {
     classes
   } = props;
   
  return (
    <div className={classes.sideBarContainer}>
      <Grid container>
        <Grid item>
          <div className={classes.profileCircle}></div>
        </Grid>
        <Grid item>       
          <div className={classes.userName}>
            Angela Vachon
          </div>
        </Grid>
      </Grid>
      <hr className={classes.SideBarHr}/>
      <Grid container>
        <Grid item>
          <SideBarButton
            buttonName={"Create New Post"}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <SideBarButton
            buttonName={"My Photos"}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <SideBarButton
            buttonName={"About Me"}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(SideBar);