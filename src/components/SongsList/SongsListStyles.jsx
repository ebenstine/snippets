import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
      
        
        backgroundColor:  '#f0a1a1',
        border: '1px solid #4d8aaa',
        width: 345
        
    },
    
    card1: {
      
        
        backgroundColor: '#afe4f1',
        border: '1px solid #4d8aaa',
        width: 345
        
    },

    card2: {
       
       
        backgroundColor: 'rgb(250, 250, 175)',
        border: '1px solid #4d8aaa',
        width: 345
    },
    
    card3: {
       
        
        backgroundColor: '#fdd377',
        border: '1px solid #4d8aaa',
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
        background: 'linear-gradient(to right,  #9c9e9f 0%,#e7e7e7 100%)',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '3em',
        paddingRight: '3em',
        width: 750,
        border: '1px solid #fdd377',
    
        
    },

    player: {
       
        marginBottom: '.5em',
        marginLeft: '.65em',
        marginRight: '.45em',
        color: '#1a313f',
        border: '1.35px solid #4d8aaa',
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
            color:'#3b95ac',
            cursor: 'pointer' 
    }
        
    },

    

    button: {
        
        fontSize: 16,
        color: '#2a4f64',
        backgroundColor:'#EBEBEB',
        boxShadow: '1px 1px 10px grey',
        border: '1.25px solid #c8ecf5'
        

    }

    
    
}));
export default useStyles;