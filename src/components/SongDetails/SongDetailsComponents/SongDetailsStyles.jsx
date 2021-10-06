import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cardContent: {
        marginTop: '-2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 350,
        maxHeight: 400,
        minHeight: 400,
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        paddingTop: '3em',
        backgroundColor: '#c8ecf5'
    },

    card: {
        backgroundColor:'#c8ecf5'
    },

    text: {
        display: 'flex',
        width: 295,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '7.4em',
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        fontSize: 14.5,
        paddingBottom: '2em',
        borderBottom: '1px solid #afe1ee'
        

    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em'
    },

    paper: {
        margin: '4em auto',
        backgroundColor: '#14342B50',
        paddingBottom: '6em',
        paddingTop: '6em',
        width: 650,
        alignItems: 'center'
       
    },

    player: {
        position: 'absolute',
        bottom: '4em',
        borderBottom:'#14342B50'
    },
    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#1a313f',
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad'
       
        
    },
    cardText: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 10.5,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap'
    },
    buttons: {
        marginLeft: '1.75em',
        marginBottom: '.3em',
        color: '#1a313f'
    }
}));
export default useStyles;