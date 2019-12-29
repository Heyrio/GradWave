import Background from '../components/images/loginbg.jpeg';
import color from '@material-ui/core/colors/amber';
import { positions, fontSize } from '@material-ui/system';

export const styles = theme => ({
    loginContainer:{
        backgroundSize: "cover",
        backgroundImage:  `url(${Background})`,
        height: "100vh",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        zIndex: -1,
    },
    loginTitle:{
        color: "#488286",
        fontSize: 40,
        textShadow: "2px 2px 4px #000000",
    }
  
});