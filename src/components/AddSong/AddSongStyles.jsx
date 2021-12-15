import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            //margin: theme.spacing(1),
            color: '#2a4f64'
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#2a4f64',
            border: '#3b95ac'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        }, 
            
            
            
        
        "& .MuiOutlinedInput-input": {
            color: "#2a4f64",
            //border: "2px solid #3b95ac"
            
        },
        //"& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            //border: "2px solid #3b95ac"
          //},
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3b95ac",
            borderRadius: "5px 5px 5px 5px"
          },
        

          
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                color: '#3b95ac',
                //paddingLeft: '4em'
                
            },
            '& .Mui-selected': {

               borderColor: '3b95ac'

            },
            '&:hover fieldset': {
                border:' 1.5px solid #3b95ac' 
            },  
            '&:fieldset.Mui-focused': {
                border:' 1.5px solid #3b95ac'
            
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
    priority0: {
        
        /*borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',*/
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#EBEBEB",
        color: '#2a4f64',
        
        
        },
    priority1: {
        
       /* borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',*/
        
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#afe4f1",
        color: '#2a4f64',
      
        
            
            
        },
    priority2: {
        
        /*borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',*/
        
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#ffb171",
        color: '#2a4f64',
       
            
                
        },

    priority3: {
        
        /*borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',*/
        
        
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
        border: '1.25px solid #eb9148'

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
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#f0a1a1',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        //border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '2.7em'
        
    },

    setPriority1: {
        
        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#afe4f1',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '2.7em'
        
    },

    setPriority2: {
        
        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#ffb171',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '2.7em'
        
    },

    setPriority3: {
        
        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#fdd377',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '2.7em'
        
    },

    

    selectTitle: {
        color: "#2a4f64",
        background: "transparent"
    },

    dialog: {
        background: '#fff099',
        border: '1px solid #3b95ac' 
    }

    

    

    
}));

export default useStyles;