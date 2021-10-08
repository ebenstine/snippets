import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    
    card: {
        flexDirection: 'column',
        backgroundColor: '#c8ecf5' 
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
        color: '#1a313f'
        
    },

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: 'auto',
        marginTop: 'auto',
        color: '#1a313f',
    },

    button: {
        border: '1px solid #1a313f',
        fontSize: 15,
        color: '#1a313f',
        backgroundColor:'#ccdbdf'

    }

    
    
}));
export default useStyles;