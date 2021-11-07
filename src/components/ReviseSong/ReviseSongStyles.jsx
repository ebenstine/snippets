import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2a4f64',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2a4f64',
            },
            '&:hover fieldset': {
                borderColor: '#2a4f64',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#2a4f64',
            },
        },
    },
    buttons: {
        margin: theme.spacing(1),
        width: '12ch',
        marginBottom: '1em',
        marginTop: '1.5em',
        background: '#EBEBEB',
        color: '#2a4f64',
        border: '1px solid #c8ecf5'
    },
    titleField: {
        margin: theme.spacing(1),
        width: '16em',
        marginBottom: '1em',
        marginTop: '1.5em',
    },
    paper: {
        margin: '4em auto',
        backgroundColor: '#bdbdbd',
        paddingBottom: '6em',
        width: 650

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
        fontSize: 22,
        color: '#2a4f64',
        margin: 'auto'
    },
    

}));

export default useStyles;