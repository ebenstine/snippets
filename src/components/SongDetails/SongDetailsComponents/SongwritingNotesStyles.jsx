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
        
        width: '42ch',
        marginBottom: '1em',
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

    

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 12,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#233d4d',
        
    },

    notesDiv1: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#94d9eb',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesDiv2: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#f8a058',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesDiv3: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#fcca60',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesDivUncertain: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#eb9292',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesBlock1: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#94d9eb',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'

    },

    notesBlock2: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#f8a058',
            cursor: 'pointer',
            //border: '1px solid #6ca0ad'
            
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em'
        //border: '1px solid #6ca0ad',
  


    },

    notesBlock3: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#fcca60',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em'

    },

    notesBlock: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#eb9292',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em'

    },

    cardText: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        //borderBottom: '1px solid #6ca0ad',
        paddingTop: '.5em',
        whiteSpace: 'pre-wrap',
        color: '#233d4d',
        
    },
}));

export default useStyles;