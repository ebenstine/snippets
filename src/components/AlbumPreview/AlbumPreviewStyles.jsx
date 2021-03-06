import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
      
        
        background:'transparent',
        
        width: 700,
        paddingTop:'1em'
        
    },
    
    card1: {
      
        
        backgroundColor: '#afe4f1',
        border: '1px solid #1d778d',
        display:'flex',
        
        
    },

    card2: {
       
       
        backgroundColor: '#ffb171',
        border: '1px solid #1d778d',
        display:'flex'
    },
    
    card3: {
       
        
        backgroundColor: '#fdd377',
        border: '1px solid #1d778d',
        display:'flex'
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

    paper1: {
        margin: '3em auto',
        background: 'linear-gradient(to right,  #1d778d 0%, transparent 100%), linear-gradient(-10deg, #c8e5ec 18%, #1d778d 2%, transparent 18.15%), linear-gradient(279deg, #d4f3f7 11.5%, #94d9eb 2%, transparent 11.75%)',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '4.2em',
        paddingRight: '3em',
        width: 750,
        border: '1px solid #eb9148',
    
        
    },

    paper2: {
        margin: '3em auto',
        background: 'linear-gradient(to right,  #1d778d 0%, transparent 100%), linear-gradient(-10deg, #ffb171 18%, #1d778d 2%, transparent 18.15%), linear-gradient(279deg, #ffd59e 11.5%, #94d9eb 2%, transparent 11.75%)',
        paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '4.2em',
        paddingRight: '3em',
        width: 750,
        border: '1px solid #eb9148',
    
        
    },

    paper3: {
        margin: '3em auto',
        background: 'linear-gradient(to right,  #1d778d 0%, transparent 100%), linear-gradient(-10deg, #fdd377 18%, #1d778d 2%, transparent 18.15%), linear-gradient(279deg, #fff7ac 11.5%, #94d9eb 2%, transparent 11.75%)',
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
       
        backgroundColor:'#afe4f1',
        '&:hover': {
           
            backgroundColor: '#94d9eb',
            
        },
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
        
        
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
        backgroundColor:'#ffb171',
        '&:hover': {
            
            
            backgroundColor: '#f8a058',
            
        },

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
        
        
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
        backgroundColor: '#fdd377',
        '&:hover': {
            
            
            backgroundColor: '#fcca60',
            
        },

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
        
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
            background:'linear-gradient(9deg, #afe4f1 37%, transparent 38%)'
            
        }
        
    },

    menuDots: {
        paddingLeft: '46.5em',
        marginTop: '-6em'
    },

    title1: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginRight: '.5em',
        
        color: '#233d4d',
        '&:hover': {
            
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #afe4f1 37%, transparent 38%)'
            
        }

    },

    title2: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginRight: '.5em',
        color: '#233d4d',
        '&:hover': {
            
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #ffb171 37%, transparent 38%)'
            
        }

    },

    title3: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginRight: '.5em',
        color: '#233d4d',
        '&:hover': {
            
            cursor: 'pointer',
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(9deg, #fdd377 37%, transparent 38%)'
            
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

    heading1: {
       
        color: '#2a4f64',
        //borderRadius: '2px',
        //marginTop: '1em',
        paddingBottom: '.2em',
        fontSize: 18,
        '&:hover': {
            
            cursor:'pointer',
            color:'#afe4f1'
            
          
        },
        display:'flex',
        justifyContent:'center'

    },

    heading2: {
       
        color: '#2a4f64',
        //borderRadius: '2px',
        //marginTop: '1em',
        paddingBottom: '.2em',
        fontSize: 18,
        '&:hover': {
            
            cursor:'pointer',
            color: '#ffb171'
            
          
        },
        display:'flex',
        justifyContent:'center'
    },

    heading3: {
        
        color: '#2a4f64',
        //borderRadius: '2px',
        //marginTop: '1em',
        paddingBottom: '.2em',
        fontSize: 18,
        '&:hover': {
            
            cursor:'pointer',
            color:'#fdd377'
            
          
        },
        display:'flex',
        justifyContent:'center'
    },

    playIcon: {
        color: '#fde76c'
    },

    detailHeading:{
        marginLeft: '3em',
        marginRight: '3em',
        //marginTop: '2em',
        //marginBottom:'2em',
        color: '#2a4f64',
        
    },


    editField: {
        display:'flex',
        justifyContent:'center'
    },

    dialogHeading: {
        color: '#2a4f64',
        borderBottom: '1px solid #2a4f64',
        fontSize: 20,
        display:'flex',
        justifyContent:'center'
        
      }, 
    albumSpec:{
        marginLeft: '3em',
        marginRight: '3em',
        //marginTop: '2em',
        marginBottom:'1em',
        color: '#2a4f64',
        display: 'flex',
        justifyContent:'center',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
          background:'#94d9eb',
          cursor: 'pointer'
          },
        border: "1px solid #eb9148",
        borderRadius: "3px",
        paddingLeft:'1em',
        paddingRight:'1em',
        
        
    },

    
    
}));
export default useStyles;