import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
      
        
        background:'#f0a1a1',
        border: '1px solid #1d778d',
        width: 345
        
    },
    
    card1: {
      
        
        backgroundColor: '#afe4f1',
        border: '1px solid #1d778d',
        width: 345
        
    },

    card2: {
       
       
        backgroundColor: '#ffb171',
        border: '1px solid #1d778d',
        width: 345
    },
    
    card3: {
       
        
        backgroundColor: '#fdd377',
        border: '1px solid #1d778d',
        width: 345
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
        margin: '3em auto',
        background: 'linear-gradient(to right,  #1d778d 0%, transparent 100%), linear-gradient(-5deg, #fff7ac 10%, #94d9eb 2%, transparent 10.25%), linear-gradient(273deg, #fdf0ef 8%, #ffd59e 1%, transparent 8%)',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '4.2em',
        paddingRight: '3em',
        width: 750,
        border: '1px solid #eb9148',
    
        
    },

    player: {
       
        marginBottom: '.5em',
        marginLeft: '.65em',
        marginRight: '.45em',
        color: '#1a313f',
        border: '1.5px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            
            backgroundColor: '#eb9292',
    }
        
        
    },

    player1: {
       
        marginBottom: '.5em',
        marginLeft: '.65em',
        marginRight: '.45em',
        color: '#1a313f',
        border: '1.5px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
           
            backgroundColor: '#94d9eb',
            
        }
        
        
    },

    player2: {
       
        marginBottom: '.5em',
        marginLeft: '.65em',
        marginRight: '.45em',
        color: '#1a313f',
        border: '1.5px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            
            
            backgroundColor: '#f8a058',
            
        }
        
        
    },

    player3: {
       
        marginBottom: '.5em',
        marginLeft: '.65em',
        marginRight: '.45em',
        color: '#1a313f',
        border: '1.5px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            
            
            backgroundColor: '#fcca60',
            
        }
        
    },

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #eb9292 37%, transparent 38%)'
            
        }
        
    },

    menuDots: {
        paddingLeft: '46.5em',
        marginTop: '-6em'
    },

    title1: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #94d9eb 37%, transparent 38%)'
            
           
    }
        
    },

    title2: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            //color:'#1d778d',
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #f8a058 37%, transparent 38%)'
            
        }
        
    },

    title3: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: '-.4em',
        marginTop: 'auto',
        color: '#233d4d',
        '&:hover': {
            //color:'#1d778d',
            cursor:'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #fcca60 37%, transparent 38%)'
          
        }
        
    },

    menuDots: {
        paddingLeft: '46.5em',
        marginTop: '-6em'
    },
    

    button: {
        
        fontSize: 16,
        color: '#2a4f64',
        backgroundColor:'#EBEBEB',
        boxShadow: '1px 1px 10px grey',
        border: '1.25px solid #c8ecf5'
        

    },

    message: {
        color: '#2a4f64',
        fontSize: 20
        
    },

    message: {
        color: '#1a313f',
        fontSize: 14.5,
        paddingTop: '2em',
        paddingBottom: '2em'

        
    },

    blankPage: {
        
        margin: '4em auto',
        background: 'linear-gradient(to right,  #9c9e9f 0%,#f6f6f6 100%)',
        border: '1px solid #ffb171',
        paddingBottom: '2em',
        width: 650,
        marginBottom: '10em'

    },


    messageCard: {
        width: 500,
        margin: 'auto',
        marginTop: '3em',
        marginBottom:'3em',
        border: '1px solid #1d778d',
        background: '#fcbe8c'
    },

    feedback: {

        color: '#1d778d',
        fontSize: 40,
        paddingTop: '.5em',
        paddingLeft: '.5em',
        display: 'flex',
        flexWrap: 'wrap',

    },

    heading: {
        borderBottom: '1px solid #2a4f64',
        color: '#2a4f64',
        //borderRadius: '2px',
        paddingTop: '.2em',
        paddingBottom: '.2em',
        fontSize: 15
    },

    playIcon: {
        color: '#fde76c'
    },

    hackButton: {
        color: '#233d4d',
        '&:hover': {
            color:'#77c568',
            },
        background: 'transparent',
        marginLeft: '20em',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            
            background:'#fde76c',
            
            },
        
    }

    
    
}));
export default useStyles;