import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            color: '#2a4f64',
            border:'#2a4f64'
            //width: '25ch'
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
                border:' 1.5px solid #3b95ac' 
            },  
            '&:fieldset.Mui-focused': {
                border:' 1.5px solid #3b95ac'
            
            },
        },
    },

    textField: {
        
        width: '34ch',
        marginBottom: '1em',
        fontSize: 20
    },

    subheading: {
        marginLeft: '.5em',
        marginBottom: '1.5em',
        marginTop: '.5em'
    },
    actions: {
        marginBottom: '2em',
        
        marginLeft: '7.5em',
    },

    buttons:  {
        color: '#2a4f64'
    },

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #eb9292 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

     title1: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #94d9eb 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

     title2: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #f8a058 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

     title3: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #fcca60 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

    
}));

export default useStyles;
