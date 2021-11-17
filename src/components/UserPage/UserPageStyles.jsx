import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    
    paper: {
        margin: '4em auto',
        backgroundColor: '#c8ecf5',
        paddingBottom: '0em',
        width: 300,
        
    },
    
    
    welcome: {
        color: '#233d4d',
        borderBottom: '1px solid #6ca0ad',
        paddingRight: '.5em',
        paddingLeft: '.75em'
        
    },
    yourId: {
        color: '#233d4d',
        borderBottom: '1px solid #6ca0ad',
        paddingRight: '2em',
        paddingLeft: '3.5em'
    },

    buttons: {
        marginLeft: '3em',
        marginBottom: '1em',
        marginRight: '2em',
        color: '#233d4d',
        border: '1px solid #6ca0ad',
        paddingLeft: '1em',
        paddingRight: '1em'
   
        
    },

    


}));

export default useStyles 