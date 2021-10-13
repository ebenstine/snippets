import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cardContent: {
        marginTop: '-2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 350,
        maxHeight: 500,
        minHeight: 200,
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        paddingTop: '3em',
        //backgroundColor: '#c8ecf5'
    },
    
    card1: {
   
        backgroundColor: '#c8ecf5' 
    },

    card2: {
      
        backgroundColor: 'rgb(250, 250, 175)'
    },
    
    card3: {
      
        backgroundColor: '#fdd377'
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
        paddingBottom: '2em',
        borderBottom: '1px solid #afe1ee'
        

    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em'
    },

    paper: {
        margin: '4em auto',
        backgroundColor: '#14342B50',
        paddingBottom: '6em',
        paddingTop: '6em',
        width: 650,
        alignItems: 'center'
       
    },

    player: {
        position: 'absolute',
        bottom: '4em',
        border: '1px solid snow'
    },
    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad'
       
        
    },
    cardText: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap'
    },

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap'
    },

    buttons: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        border: '1px solid #c8ecf5',
        paddingLeft: '1em',
        paddingRight: '1em'
        
    }
}));
export default useStyles;