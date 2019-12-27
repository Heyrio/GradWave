import Background from './images/gf.jpg';
import color from '@material-ui/core/colors/amber';
export const styles = theme => ({
  test:{
    marginTop: 10, 
    padding: 15, 
    height: 'calc(100vh - 70px)', 
    width: '100%', 
    border: "1px solid black",
    marginRight: 20,
    backgroundColor: "#5bc8db",
    color: "white",
  },

  profileCircle:{
    borderRadius: "100%",
    border: "1px solid black",
    width: "80%",
    height: "35%",
    backgroundColor: "#fff",
    backgroundSize: "cover",
    backgroundImage:  `url(${Background})`,
    margin: "0 auto"
  },

  userName:{
    textAlign: "center",
    fontSize: 24,
    fontWeight: 600,
     textShadow: "2px 2px 4px #000000"
  }
  

});