import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    
    card1: {
        flexDirection: 'column',
        backgroundColor: '#c8ecf5' 
    },

    card2: {
        flexDirection: 'column',
        backgroundColor: 'rgb(250, 250, 175)'
    },
    
    card3: {
        flexDirection: 'column',
        backgroundColor: '#e6b754'
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
        margin: '4em auto',
        backgroundColor: '#14342B50',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '3em',
        paddingRight: '3em',
        width: 650
        
    },

    player: {
       
        marginBottom: '.5em',
        marginLeft: '.85em',
        marginRight: '19.5em',
        color: '#1a313f',
        border: '1.35px solid #14342B50',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        
        
    },

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: 'auto',
        marginTop: 'auto',
        color: '#1a313f',
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