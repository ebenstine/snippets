import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    
    paper: {
        margin: '4em auto',
        backgroundColor: '#bdbdbd',
        paddingBottom: '2em',
        width: 650
    },
    
    
    welcome: {
        color: '#233d4d',
        borderBottom: '1.5px solid #6ca0ad',
        
        
    },
    songCount: {
        color: '#233d4d',
        borderBottom: '1.5px solid #f0a1a1',
        
        paddingRight: '2em',
        paddingLeft: '3.5em',
        
    },

    recordingCount: {
        color: '#233d4d',
        borderBottom: '1px solid #fdd377',
        paddingRight: '2em',
        paddingLeft: '3.5em'
    },

    button1: {
      
        marginBottom: '1em',
       
        color: '#233d4d',
        border: '1px solid #6ca0ad',
        paddingLeft: '.5em',
        paddingRight: '.5em'
   
        
    },

    button2: {
        
        marginBottom: '1em',
       
        color: '#233d4d',
        border: '1px solid #6ca0ad',
        paddingLeft: '1em',
        paddingRight: '1em'


    }

    


}));

export default useStyles 