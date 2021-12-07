import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cardContent: {
        marginTop: '-2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 380,
        maxHeight: 900,
        minHeight: 200,
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        paddingTop: '3em',
        //backgroundColor: '#c8ecf5'
    },

    card: {
        
        backgroundColor:  '#f0a1a1',
        border: '1px solid #4d8aaa'
        
    },
    
    card1: {
        
        backgroundColor: '#afe4f1', 
        border: '1px solid #4d8aaa'
    },

    card2: {
        
        backgroundColor: '#ebad7b',
        border: '1px solid #4d8aaa'
        
    },
    
    card3: {
        
        backgroundColor: '#fdd377',
        border: '1px solid #4d8aaa'
        
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
        borderBottom: '1px solid #afe1ee',
        color: '#233d4d'
        

    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em'
    },

    paper: {
        margin: '4em auto',
        background: 'linear-gradient(to right,  #9c9e9f 0%,#e7e7e7 100%)',
        paddingBottom: '1em',
        paddingTop: '1em',
        width: 650,
        alignItems: 'center',
        border: '1px solid #ffcdd2'
       
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
        borderBottom: '1.25px solid #6ca0ad'
       
        
    },
    cardText: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1.25px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#233d4d'
    },

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1.25px solid #6ca0ad',
        whiteSpace: 'pre-wrap'
    },

    buttons: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        border: '1px solid #3b95ac',
        paddingLeft: '1em',
        paddingRight: '1em'
        
    },

    menuDots: {
        paddingLeft: '25em',
        color: '#233d4d'
    },

    more: {
        paddingLeft: '1em'
    },

    button: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        background: '#fff099',
        border: '1px solid #3b95ac',
        paddingLeft: '1em',
        paddingRight: '1em',
        '&:hover': {
            background:'#fde76c',
            },
        
    },
    dialog: {
        backgroundColor: '#efefef',
        border: '1px solid #dd4e4e',
        color: '#233d4d'
    },

    dialogButtons: {

        color: '#233d4d',
        border: '1px solid #c8ecf5',
    }
    
}));
export default useStyles;