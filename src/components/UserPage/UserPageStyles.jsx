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
        
        
    },
    songCount: {
        color: '#233d4d',
        
        //borderTop: '1.5px solid #6ca0ad',
        paddingRight: '2em',
        paddingLeft: '3.5em',
        paddingTop: '1em'
        
    },

    recordingCount: {
        color: '#233d4d',
        
        paddingRight: '2em',
        paddingLeft: '3.5em'
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
        marginLeft: '21em',
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
    },

    playIcon: {
        color:"#1d778d",
        outlineColor: "#233d4d",
        marginLeft: "0em"
    },

    highlight: {

        color: '#1d778d',
        borderBottom: '1.5px solid #eb9148'

    },

    infoCard: {

        backgroundColor: "#ffb171",
        border: '1px solid #1d778d'
    
    }

    


}));

export default useStyles 