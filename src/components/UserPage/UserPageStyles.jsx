import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
   
    titleField: {
        margin: 'auto',
        width: '16em',
        marginBottom: '1em',
        marginTop: '1.5em',
    },
    paper: {
        margin: '4em auto',
        backgroundColor: '#c8ecf5',
        paddingBottom: '0em',
        width: 300,
        
    },
    textField: {
        margin: 'auto',
        width: '40ch',
        marginBottom: '1em',
        marginTop: '1em'
    },
    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '9em',
        paddingTop: '3em'
    },  
    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 24
    },
    wrapper: {
        display: 'flex',
        
    },
    welcome: {
        color: '#233d4d',
        borderBottom: '1px solid #6ca0ad',
        paddingRight: '.5em',
        paddingLeft: '.75em'
        
    },
    yourId: {
        color: '#233d4d',
        borderBottom: '1px solid #6ca0ad',
        paddingRight: '2em',
        paddingLeft: '3.5em'
    },

    button: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        border: '1px solid #6ca0ad',
        paddingLeft: '1em',
        paddingRight: '1em'
   
        
    },

    explore: {
        paddingRight: '3.5em',
        paddingLeft: '5.5em',

    }


}));

export default useStyles 