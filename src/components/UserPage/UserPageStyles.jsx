import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    
    paper: {
        margin: '4em auto',
        background: 'linear-gradient(to right,  #9c9e9f 0%,#f6f6f6 100%)',
        border: '1px solid #ffb171',
        paddingBottom: '2em',
        width: 650,
        marginBottom: '10em'
    },
    
    
    welcome: {
        color: '#233d4d',
        //borderBottom: '1.5px solid #6ca0ad',
        fontSize: 24,
        paddingBottom: '1em',
        paddingTop: '1em',
        borderBottom: '1.5px solid #6ca0ad',
        width: 400,
        margin: 'auto'
        
        
    },
    songCount: {
        color: '#233d4d',
        
        //borderTop: '1.5px solid #6ca0ad',
        paddingRight: '2em',
        paddingLeft: '3.5em',
        paddingTop: '1em',
        fontSize: 17
        
    },

    recordingCount: {
        color: '#233d4d',
        
        paddingRight: '2em',
        paddingLeft: '3.5em',
        paddingBottom: '2em',
        fontSize: 17,
        borderBottom: '1.5px solid #6ca0ad'
    },

    button1: {
      
        marginBottom: '-2em',
        marginLeft: '17em',
        color: '#233d4d',
        border: '1px solid #6ca0ad',
        paddingLeft: '.5em',
        paddingRight: '.5em'
   
        
    },

    button2: {
        
        marginBottom: '-2em',
        //marginLeft: '21em',
        color: '#233d4d',
        background: '#fff099',
        border: '1px solid #6ca0ad',
        paddingLeft: '1em',
        paddingRight: '1em',
        '&:hover': {
            background:'#fde76c',
            },
     
            

    },
    genrePrompt: {
        color: '#233d4d',
        paddingBottom:'1em',
        paddingRight: '2em',
        paddingLeft: '3.5em',
        //borderBottom: '1.5px solid #6ca0ad'
        fontSize: 17
    },

    playIcon: {
        color:"#1d778d",
        outlineColor: "#233d4d",
        marginLeft: "0em",
        fontSize: 17
    },

    highlight: {

        color: '#1d778d',
        borderBottom: '1.5px solid #eb9148',
        fontSize: 17

    },

    infoCard: {

        backgroundColor: "#d0f7fa",
        border: '1px solid #1d778d'
    
    }

    


}));

export default useStyles