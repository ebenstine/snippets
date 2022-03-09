import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
         
      
          '& .MuiTextField-root': {
              //marginLeft: '3em',
              color: '#2a4f64',
              marginTop: '1em',
              marginBottom: '1em',
              
              '&:hover fieldset': {
                borderColor: '#ffab5c'
              },

              '&::placeholder':{
                color: 'black'
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
              color: "#2a4f64",
             
              
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
        margin: 'auto',
        '&::placeholder':{
            color: 'black'
        }
    },

    dialogButtons: {
        background: "#fff099",
        color: "#2a4f64",
        border: "1px solid #3b95ac",
        marginBottom: "2em",
        marginTop: "1em",
        marginLeft:'.5em',
        marginRight:'.5em',
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    textfield: {
        margin: theme.spacing(3),
        width: '40ch',
        marginBottom: '1em',
        display: 'flex',
        justifyContent:'center',
        marginTop: '1em'
    },

    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        justifyContent:'center',
        paddingTop: '1em'
    },

    upload: {
        display: 'flex',
        justifyContent:'center',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
          background:'#94d9eb',
          },
        border: "1px solid #eb9148",
        borderRadius: "3px"
    }

}));

export default useStyles 