import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {styles} from './HeaderBar.styles.js'
import { withStyles } from '@material-ui/core/styles';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
function HeaderBar(props) {
  
const {classes} = props;
  return (
    <div>
      <AppBar className={classes.headerBar} position="static">
        <Toolbar>
          <Typography className={classes.headerBarTitle}>
            GradWave
          </Typography>
          <IconButton
              edge="end"
              aria-label="account of current user"
              component={Link} to="/"
              aria-haspopup="true"
              className={classes.settingsBtn}
              color="inherit"
            >
              <Tooltip title="Account Settings">
                  <AccountCircle />
              </Tooltip>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(HeaderBar);