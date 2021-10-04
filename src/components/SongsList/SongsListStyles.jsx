import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
        
        //marginTop: '2em',
        //marginLeft: '1em',
        //marginRight: '1em',
        //width: 350,
        //maxHeight: 200,
        //minHeight: 200,
        flexDirection: 'column',
        //position: 'relative',
        backgroundColor: '#c8ecf5'
        
        
    },

    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '1em',
        paddingTop: '3em',
        backgroundColor: '#77a9b6',
        color: '#2a4f64'

       
        
        
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
        width: 600
        
    },

    player: {
        //position: 'absolute',
        //bottom: '0em',
        //backgroundColor: '#77a9b6',
        //backgroundColor: '#d3f6ff',
        marginBottom: '.5em',
        marginLeft: '.85em'
        
    },

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: 'auto',
        marginTop: 'auto',
        color: '#2a4f64',
        
    
       
    }
}));
export default useStyles;