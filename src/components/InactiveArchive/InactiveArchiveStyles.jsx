import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
      
        
        backgroundColor:  '#b9b9b9',
        border: '1px solid #1d778d',
        width: 345,
        marginTop: '3.5em'
        
    },
    
    card1: {
      
        
        backgroundColor: '#afe4f1',
        border: '1px solid #1d778d',
        width: 345
        
    },

    card2: {
       
       
        backgroundColor: '#ffb171',
        border: '1px solid #1d778d',
        width: 345
    },
    
    card3: {
       
        
        backgroundColor: '#fdd377',
        border: '1px solid #1d778d',
        width: 345
    },

    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '1em',
        paddingTop: '3em',
        backgroundColor: '#77a9b6',
        color: '#1a313f'

    },

    text: {
        display: 'flex',
        //width: 295,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '7.4em',
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        fontSize: 14.5,
        
        //paddingBottom: '2em',

    },

    paper: {
        margin: '3em auto',
        background: 'linear-gradient(to right,  #1d778d 0%,#f6f6f6 100%)',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '4.2em',
        paddingRight: '3em',
        width: 750,
        border: '1px solid #eb9148',
    
        
    },

    player: {
       
        marginBottom: '.5em',
        marginLeft: '.65em',
        marginRight: '.45em',
        color: '#1a313f',
        border: '1.5px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        
        
    },

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d'
    }
        
    },

    title1: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            //color:'#1d778d',
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
           
    }
        
    },

    title2: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            //color:'#1d778d',
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d'
    }
        
    },

    title3: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            //color:'#1d778d',
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d'
    }
        
    },

    menuDots: {
        paddingLeft: '46.5em',
        marginTop: '-6em'
    },
    

    button: {
        
        fontSize: 16,
        color: '#2a4f64',
        backgroundColor:'#EBEBEB',
        boxShadow: '1px 1px 10px grey',
        border: '1.25px solid #c8ecf5'
        

    },

    message: {
        color: '#2a4f64',
        paddingTop: '5em',
        fontSize: 20
        
    }

    
    
}));
export default useStyles;
