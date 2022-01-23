import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        flexDirection: 'column',
        backgroundColor:  '#f0a1a1',
        width: 100 
    },
    
    card1: {
        flexDirection: 'column',
        backgroundColor: '#82bdcc',
        color: 'rgb(250, 250, 175)',
        marginLeft: '.5em',
        marginRight: '.5em',
        border: '1px solid #1d778d'
        
    },

    card2: {
        flexDirection: 'column',
        backgroundColor: 'rgb(250, 250, 175)'
    },
    
    card3: {
        flexDirection: 'column',
        backgroundColor: '#fdd377'
    },

    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '1em',
        paddingTop: '3em',
        backgroundColor: '#77a9b6',
        color: '#1a313f'

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
        
        //paddingBottom: '2em',

    },

    paper: {
       
        background: 'linear-gradient(to right,  #9c9e9f 0%, #e7e7e7 100%)',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        width: 400,
        height: 500
        
    },

    player: {
       
        marginBottom: '.5em',
        marginLeft: '.85em',
        marginRight: '-.35em',
        color: '#1a313f',
        border: '1.35px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        
        
    },

    drawerHeader: {
        display: "flex",
        align: "center",
        paddingRight: "4.74em",
        color: "#233d4d",
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 22,
        
        
        justifyContent: "flex-end",
    },

    description: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 12,
        marginLeft: '1.5em',
        marginRight: '1.5em',
        borderBottom: '1.5px solid #1d778d',
        marginTop: 'auto',
        color: '#233d4d',
    },

    button: {
        
        fontSize: 16,
        color: '#2a4f64',
        backgroundColor:'#EBEBEB',
        boxShadow: '1px 1px 10px grey',
        border: '1.25px solid #c8ecf5'
        

    },

    view: {
        paddingLeft: '1.75em',
        background: '#fff099',
        '&:hover': {
          background:'#fde76c',
          },
        border: "1px solid #3b95ac",
        borderRadius: "3px",
    },

    bye: {
        color:'#eb9148',
        marginTop: '.75em',
        marginLeft: '.75em',
        marginBottom: '.75em',
        background: '#1d778d',
        '&:hover': {
            background:'#3b95ac',
            }

       
        //border: '1px solid #233d4d',
        //background: '#EBEBEB'
    },

    firstRecording: {
        color: "#233d4d",
    },

    cuteStar:{
        color:'#eb9148' 
    }

    
    
    
}));
export default useStyles;