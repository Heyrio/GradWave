
import color from '@material-ui/core/colors/amber';
import { borderRadius, border } from '@material-ui/system';
export const styles = theme => ({

  buttonText:{
      fontSize: 16,
      paddingLeft: 5,
      paddingTop: 2.5,
  },
  sideBarButtonContainer:{
    padding: 10,
    cursor: "pointer",
    borderRadius: '5px',
    marginTop: 3,
    transition: "0.2s",
    width: 260,
    
    "&:hover": {
      border: "1px solid gray",
      backgroundColor: "rgb(207, 207, 207)",
      
    },
  }
});