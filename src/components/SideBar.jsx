import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './SideBar.styles.js'
import { Grid } from '@material-ui/core';
import SideBarButton from './SideBarButton'
import AddIcon from '@material-ui/icons/Add';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import PhotoTwoToneIcon from '@material-ui/icons/PhotoTwoTone';

 function SideBar(props) {

  const [selectedTab, setSelectedTab] = useState(0);
  const [modalToggle, setModalToggle] = useState(false);


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
            // onClick={}
            buttonName={"Create New Post"}
            buttonIcon={<AddIcon/>}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <SideBarButton
            // onClick={}
            buttonName={"My Photos"}
            buttonIcon={<PhotoTwoToneIcon/>}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <SideBarButton
            // onClick={}
            buttonName={"About Me"}
            buttonIcon={<PersonTwoToneIcon/>}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(SideBar);