import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './SideBar.styles.js'


 function SideBar(props) {
   const {
     classes
   } = props;
   
  return (
    <div className={classes.test}>
      <div className={classes.profileCircle}>
      </div>
      <div className={classes.userName}>
        Angela Vachon
      </div>
    </div>
  )
}
export default withStyles(styles)(SideBar);