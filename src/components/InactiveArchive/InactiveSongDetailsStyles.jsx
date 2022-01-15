import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

    cardContent: {
        marginTop: '-2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 380,
        maxHeight: 900,
        minHeight: 200,
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        paddingTop: '3em',
        //backgroundColor: '#c8ecf5'
    },

    card: {
        
        backgroundColor:  '#cccccc',
        border: '1px solid #4d8aaa'
        
    },
    
    card1: {
        
        backgroundColor: '#afe4f1', 
        border: '1px solid #4d8aaa'
    },

    card2: {
        
        backgroundColor: '#ffb171',
        border: '1px solid #4d8aaa'
        
    },
    
    card3: {
        
        backgroundColor: '#fdd377',
        border: '1px solid #4d8aaa'
        
    },

    text: {
        display: 'flex',
        //width: 295,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '7.4em',
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        fontSize: 14.5,
        paddingBottom: '2em',
        borderBottom: '1px solid #afe1ee',
        color: '#233d4d'
        

    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em'
    },

    paper: {
        margin: '4em auto',
        background: 'linear-gradient(to right,  #1d778d 0%,#e7e7e7 100%)',
        paddingBottom: '1em',
        paddingTop: '1em',
        width: 650,
        alignItems: 'center',
        border: '1px solid #ffcdd2'
       
    },

    player: {
        position: 'absolute',
        bottom: '4em',
        border: '1px solid snow'
    },
    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        

       
        
    },
    cardText: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#233d4d',
        
    },

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap'
    },

    buttons: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        border: '1px solid #3b95ac',
        paddingLeft: '1em',
        paddingRight: '1em'
        
    },

    

    menuDots: {
        paddingLeft: '25em',
        color: '#233d4d'
    },

    more: {
        paddingLeft: '1em'
    },

    activateButton: {
        marginLeft: '10em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        background: '#fff099',
        border: '1px solid #3b95ac',
        paddingLeft: '1em',
        paddingRight: '1em',
        '&:hover': {
            background:'#fde76c',
            
            },
        
    },

    deleteButton: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        background: '#fff099',
        border: '1px solid #3b95ac',
        paddingLeft: '1em',
        paddingRight: '1em',
        '&:hover': {
            background:'#fde76c',
            },
        
    },
    dialog: {
        
        marginLeft: '1em',
        marginRight: '1em'
    },

    dialogContent: {
        backgroundColor: 'rgb(230, 252, 255)',
        display:'flex',
        flexWrap: 'wrap',
        color: '#233d4d',
        
        
        
    },

    cancelButton: {

        color: '#233d4d',
        '&:hover': {
            color:'#e45252',
            },
        background: '#fff099',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    archiveButton: {

        color: '#233d4d',
        '&:hover': {
            color:'#77c568',
            },
        background: '#fff099',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            background:'#fde76c',
            },
        
    },



    dialogText: {
        border: '1.5px solid #e45252',
        borderRadius: '3px',
        color: '#233d4d',
        background: 'linear-gradient(to bottom right,  #ff8c8c 0%,#e7e7e7 100%)',
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: '.5em',
        paddingBottom: '.5em'
        
    }
    
}));

export default useStyles;