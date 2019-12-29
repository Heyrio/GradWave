import Background from './images/gf.jpg';
import color from '@material-ui/core/colors/amber';
export const styles = theme => ({
  sideBarContainer:{
    marginTop: 10, 
    padding: 25, 
    height: 'calc(100vh - 70px)', 
    width: '100%', 
    marginRight: 20,
    backgroundColor: "#fff",
    color: '#232323'
  },

  profileCircle:{
    borderRadius: "100%",
    border: "1px solid #232323",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    backgroundSize: "cover",
    backgroundImage:  `url(${Background})`,
    cursor: "pointer",

  },

  userName:{
    textAlign: "center",
    fontSize: 18,
    position: "absolute",
    top: 102,
    left: 75,
    color: "#488286"
  },

  SideBarHr:{
    border: "0.5px solid gray"

  }
  
});