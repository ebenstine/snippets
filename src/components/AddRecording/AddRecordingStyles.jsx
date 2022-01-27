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
            borderBottomColor: '#eb9148',
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
       background: "rgb(199, 246, 252)",
       alignItems: "center",
       
    },

    dialogTitle: {
        background: "rgb(199, 246, 252)",
        color: "#2a4f64",
        paddingLeft: "6em",
        
    },

    actionDiv: {
        background: "rgb(199, 246, 252)",
        paddingRight: "6.5em",
        paddingTop: "1em",
        
        
    },

    descriptionText: {
        margin: theme.spacing(1),
        //width: '40ch',
        marginBottom: '1em',
        marginTop: '1em'

    },

    dialogButtons: {
        background: "#fff099",
        color: "#2a4f64",
        border: "1px solid #3b95ac",
        marginBottom: "2em",
        marginTop: "1em",
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    upload: {
        paddingLeft: '1em',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
          background:'#94d9eb',
          },
        border: "1px solid #eb9148",
        borderRadius: "3px"
    }

}));

export default useStyles 