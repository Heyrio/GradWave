import Background from '../components/images/loginbg.jpeg';
import color from '@material-ui/core/colors/amber';
import { positions, fontSize } from '@material-ui/system';
import WaveIcon from '../components/images/waveIcon.png';

export const styles = theme => ({
    loginContainer:{
        backgroundSize: "cover",
        backgroundImage: "linear-gradient( rgba(0,0,0,0.2), rgba(0, 0, 0, 0.5) ),"+`url(${Background})`,
        height: "100vh",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        zIndex: -1,
        paddingLeft: "25%",
        paddingRight: "25%",

    },
    loginTitle:{
        color: "#077B75",
        fontSize: 40,
        // textShadow: "1px 1px 2px #000000",
        textAlign: "center",
    },

    loginCard:{
        textAlign: "center",
        height: "50vh",
        backgroundColor: "#fff"
    },

    waveIcon:{
        display: "inline-flex",
        backgroundSize: "cover",
        backgroundImage: `url(${WaveIcon})`,
        height: 100,
        width: 125
    }

  
});