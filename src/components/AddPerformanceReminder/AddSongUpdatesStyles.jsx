import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    root: {
         
      
        '& .MuiTextField-root': {
            
            color: '#1d778d',
            
            '&:hover fieldset': {
              borderColor: '#ffab5c'
            }
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#3b95ac',
            borderColor: '#ffab5c',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        }, 
            
            
            
        
        "& .MuiOutlinedInput-input": {
            color: "#1d778d",
           
            
        },
        //"& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            //border: "2px solid #3b95ac"
          //},
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
    
    dialog: {
       background: "rgb(199, 246, 252)",
       align: "center",
       
    },

    dialogTitle: {
        background: "rgb(199, 246, 252)",
        color: "#2a4f64",
        display:'flex',
        justifyContent:'center',
        marginBottom: '1em'
        
        
    },

    actionDiv: {
        background: "rgb(199, 246, 252)",
        
        
        
    },

    descriptionText: {
        margin: 'auto'
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
        
        marginLeft: '2em',
        marginRight: '2em',
        display:'flex',
        justifyContent:'center',
        
        background: 'rgb(230, 252, 255)',
        '&:hover': {
          background:'#94d9eb',
          },
        border: "1px solid #eb9148",
        borderRadius: "3px"
    },

    textField: {
        
        width: '35ch',
        marginBottom: '1em',
        marginTop: '1em',
        color: '#1d778d'
        //marginLeft: '2em',
        //marginRight: '2em'
    },

    actions: {
        
        marginTop: '1em',
        display:'flex',
        justifyContent:'center'
    },

    buttons:  {
        background: "#fff099",
        color: "#2a4f64",
        border: "1px solid #3b95ac",
        marginBottom: "2em",
        marginTop: "3em",
        marginLeft:'.5em',
        '&:hover': {
            background:'#fde76c',
            },
        
    
    },


}));

export default useStyles;