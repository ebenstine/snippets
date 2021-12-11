import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            //margin: theme.spacing(1),
            color: 'black'
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
            

            
            
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3b95ac',
                //paddingLeft: '4em'
                
            },
            '&:hover fieldset': {
                borderColor: '#3b95ac',
                
            },
            '&.MuiSelect-select': {
                borderColor: '#3b95ac',
                borderRadius: '8px',
                //paddingLeft: '3em'
            },
            
        },
    },
    inputs: {
        margin: theme.spacing(1),
        width: '12ch',
        marginBottom: '1.5em',
        marginTop: '4em',
        background: '#fff099',
        color: '#2a4f64',
        border: '1px solid #3b95ac',
        '&:hover': {
            background:'#fde76c',
            },
    },
    priority: {
        
        borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#EBEBEB",
        color: '#2a4f64',
        
        
        },
    priority1: {
        
        borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',
        
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#c8ecf5",
        color: '#2a4f64',
      
        
            
            
        },
    priority2: {
        
        borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',
        
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#ffb171",
        color: '#2a4f64',
       
            
                
        },

    priority3: {
        
        borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',
        
        
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#fdd377",
        color: '#2a4f64',
                    
                    
        },
    
        
        
        
        

    
    titleField: {
        margin: theme.spacing(1),
        width: '16em',
        marginBottom: '1em',
        marginTop: '1.5em',
    },
    paper: {
        margin: '4em auto',
        background: 'linear-gradient(to right,  #9c9e9f 0%,#f6f6f6 100%)',
        paddingBottom: '4em',
        width: 650,
        border: '1px solid #eb9148'

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
        color: '#2a4f64'
    },
    wrapper: {
        display: 'flex',
        
    },
    buttons: {
        display: 'flex',
        alignItems: 'center'

    },
  setPriority: {
        
        color: "#2a4f64",
        
        
    }
}));

export default useStyles;