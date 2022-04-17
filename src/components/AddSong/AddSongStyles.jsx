import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            color: '#2a4f64',
            border:'#2a4f64',
            //width: '25ch'
            '& .MuiInput': {
                '&::placeholder': {
                  textOverflow: 'ellipsis !important',
                  color: 'blue'
                }
              }
        },
        
        '& label.Mui-focused': {
            color: '#2a4f64',
            border: '#3b95ac'
        },

        '& .MuiInput-underline:before': {
            borderBottomColor: '#2a4f64',
    
        },

        '& .MuiInput-underline.Mui-selected': {
            borderBottomColor: '#2a4f64',
            
        },

        

        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        }, 
            
        "& .MuiOutlinedInput-input": {
            color: "#2a4f64",
            borderBottomColor:'#2a4f64'
            //border: "2px solid #3b95ac"
            
        },
       
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1.5px solid#3b95ac",
            borderRadius: "3px 3px 3px 3px"
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
                border:' 1.5px solid #ffb171' 
            },  
            '&:fieldset.Mui-focused': {
                border:' 1.5px solid #3b95ac'
            
            },

            'input': {
                '&::placeholder': {
                  textOverflow: 'ellipsis !important',
                  color: 'blue'
                }
              }
        },
    },
    
    inputs: {
        
        margin: theme.spacing(1),
       
        marginBottom: '1.5em',
        marginTop: '4em',
        background: 'transparent',
        color: '#2a4f64',
        border: '1px solid #3b95ac',
        '&:hover': {
            background:'#fde76c',
            },
    
    },
    
    priorityUncertain: {
        
        /*borderTop: '1.5px solid #3b95ac',
        borderLeft: '1.5px solid #3b95ac',
        borderRight: '1.5px solid #3b95ac',*/
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#f0a1a1",
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

    statusActive: {
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#fde76c",
        color: '#2a4f64',
        display: 'flex',
        flexWrap: 'wrap'
        
    }, 

    statusInactive: {
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#c7c7c7",
        color: '#2a4f64',
        display: 'flex',
        flexWrap: 'wrap'
        
        
    },

    statusBlank: {
        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "transparent",
        color: '#2a4f64',
    
    },

    setActive: {
        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#fde76c',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '1.3em',
        display: 'flex'

    },

    setInactive: {
        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#b9b9b9',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '1em',
        display: 'flex'

    },

    titleField: {
        margin: theme.spacing(1),
        width: '16em',
        marginBottom: '1em',
        marginTop: '1.5em',
    },

    paper: {
        margin: '4em auto',
        background: 'linear-gradient(20deg, #94d9eb 37%, transparent 38%), linear-gradient(280deg, #fdf0ef 37%, transparent 37%), linear-gradient(-188deg, #fff7ac 14%, transparent 15% ), linear-gradient(77deg, #ffd59e 37%, transparent 37%)',
        paddingBottom: '4em',
        width: 650,
        border: '1.25px solid #ffb171'

    },

    textField: {
        margin: theme.spacing(3),
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
        color: '#2a4f64',
        fontSize: 20,
        paddingBottom: '2em'
    },

    wrapper: {
        display: 'flex',
        
    },

    buttons: {
        display: 'flex',
        alignItems: 'center'

    },

    blankPriority:{

        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "transparent",
        color: '#2a4f64',


    },

    setPriority: {

        display: 'flex',
        justifyContent:'center',
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
        //paddingLeft: '3.4em'
        
    },
    setPriorityUncertain: {
        
        display: 'flex',
        justifyContent:'center',
        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#f0a1a1',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        //paddingLeft: '1.5em'
        
    },

    setPriority1: {
        
        display: 'flex',
        justifyContent:'center',
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
        //paddingLeft: '1.5em'
        
    },

    setPriority2: {
        
        display: 'flex',
        justifyContent:'center',
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
        //paddingLeft: '1.5em'
        
    },

    setPriority3: {
        
        display: 'flex',
        justifyContent:'center',
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
        //paddingLeft: '1.3em'
        
    },

    selectTitle: {
        color: "#2a4f64",
        background: "transparent",
        paddingLeft: '2em'
    },

    selectStatus: {

        color: "#2a4f64",
        background: "transparent",
        paddingLeft: '2em'

    },

    dialog: {
        background: 'transparent',
        border: '1px solid #3b95ac' 
    },

    primaryInstrument: {

        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "#82bdcc",
        color: '#2a4f64',
        


    },

    primaryInstrumentBlank: {

        alignItems: 'center',
        //margin: '1ch',
        borderRadius: '2px',
        background: "transparent",
        color: '#2a4f64',

    },

    selectInstrument: {

        color: '#2a4f64'

        
    },

    setGuitar: {

        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#94d9eb',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '1.8em'


    },

    setKeyboard: {

        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#94d9eb',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '1.4em'


    },

    setOther: {

        color: "#2a4f64",
        background: "rgb(230, 252, 255)",
        '&:hover': {
            background:'#94d9eb',
            },
        margin: theme.spacing(1),
        marginLeft: '3em',
        marginRight: '3em',
        border: '1px solid #3b95ac',
        borderRadius: '3px',
        paddingLeft: '2em'


    }

}));

export default useStyles;