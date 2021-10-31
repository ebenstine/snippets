import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        margin: theme.spacing(1),
        width: '12ch',
        marginBottom: '1em',
        marginTop: '1.5em',
        background: '#EBEBEB'
    },
    titleField: {
        margin: theme.spacing(1),
        width: '16em',
        marginBottom: '1em',
        marginTop: '1.5em',
    },
    paper: {
        margin: '4em auto',
        backgroundColor: '#c8ecf5',
        paddingBottom: '6em',
        width: 600,
    },
    textField: {
        margin: theme.spacing(1),
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
        borderBottom: '1px solid #6ca0ad'
        
    },
    yourId: {
        color: '#2a4f64',
        borderBottom: '1px solid #6ca0ad'
    }


}));

export default useStyles 