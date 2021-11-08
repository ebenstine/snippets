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
            '&.MuiSelect fieldset': {
                borderColor: '#2a4f64',
                borderRadius: '8px'
            },
            

        },
    },

    dialog: {
       background: "#cecece" 

    },

    dialogTitle: {
        background: "#cecece",
        color: "#2a4f64"
    },

    actionDiv: {
        background: "#cecece",
        paddingRight: "6.5em",
        paddingTop: "1em",
        
        
    },

    dialogButtons: {
        background: "#EBEBEB",
        color: "#2a4f64",
        border: "1px solid #c8ecf5"


    }

}));

export default useStyles 