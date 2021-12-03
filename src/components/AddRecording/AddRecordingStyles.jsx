import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
            marginLeft: '4em',
            
        },
        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2a4f64',
                
            },
            '&:hover fieldset': {
                borderColor: '#2a4f64',
                
            },
            '&.MuiSelect fieldset': {
                borderColor: '#2a4f64',
                borderRadius: '8px'
            },
            

        },
    },

    
    dialog: {
       background: "#f7ffbd",
       alignItems: "center",
       
    },

    dialogTitle: {
        background: "#f7ffbd",
        color: "#2a4f64",
        paddingLeft: "6em",
        
    },

    actionDiv: {
        background: "#f7ffbd",
        paddingRight: "6.5em",
        paddingTop: "1em",
        
        
    },

    descriptionText: {
        margin: theme.spacing(1),
        width: '40ch',
        marginBottom: '1em',
        marginTop: '1em'

    },

    dialogButtons: {
        background: "#EBEBEB",
        color: "#2a4f64",
        border: "1px solid #c8ecf5",
        marginBottom: "2em"
    },

    upload: {
        paddingLeft: '2em'
    }

}));

export default useStyles 