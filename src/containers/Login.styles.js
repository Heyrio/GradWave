import Background from '../components/images/loginbg.jpeg';
import color from '@material-ui/core/colors/amber';
import { positions, fontSize, fontWeight } from '@material-ui/system';
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
        textAlign: "center",
    },

    loginCard:{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        height: "25vh",
        backgroundColor: "#fff",
        opacity: 0.8,
        padding: 20,
        fontWeight: 800
    },

    waveIcon:{
        display: "inline-flex",
        backgroundSize: "cover",
        backgroundImage: `url(${WaveIcon})`,
        height: 100,
        width: 125
    },

    subText:{
        color: "#fff",
        fontSize: 40,
        fontWeight: 800
    },

    loginTextField:{
       display: 'flex',
       justifyContent: "center"
    },
    button:{
        backgroundColor: "#077B75",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#077B75"
        
    },
    loginTxtField:{
        padding: "0px"
    }   
    }

  
});