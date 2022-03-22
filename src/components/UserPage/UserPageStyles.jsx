import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    
    paper: {
        margin: '4em auto',
        background: 'linear-gradient(20deg, #94d9eb 37%, transparent 38%), linear-gradient(280deg, #f4f8d3 37%, transparent 38%)',
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
        paddingTop: '.5em',
        //borderBottom: '1.5px solid #6ca0ad',
        width: 400,
        margin: 'auto'
        
        
    },

    prompt: {
        color: '#233d4d',
        margin:'auto'
        
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
        //borderBottom: '1.5px solid #6ca0ad'
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
        marginTop:'5em',
        //marginLeft: '21em',
        color: '#233d4d',
        background: '#f4f8d3',
        border: '1px solid #6ca0ad',
        paddingLeft: '.5em',
        paddingRight: '.5em',
        '&:hover': {
            background:'#fde76c',
            },
     
            

    },

    yesButton: {

        color: '#233d4d',
        background: '#f4f8d3',
        border: '1px solid #6ca0ad',
        paddingLeft: '.5em',
        paddingRight: '.5em',
        '&:hover': {
            background:'#fde76c',
            },

        marginRight:'.5em'
        

        
        
        

    },

    laterButton: {

        color: '#233d4d',
        background: '#f4f8d3',
        border: '1px solid #6ca0ad',
        paddingLeft: '.5em',
        paddingRight: '.5em',
        '&:hover': {
            background:'#fde76c',
            },
       marginLeft:'.5em'
  
        

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