import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 350,
        maxHeight: 50,
        minHeight: 50,
        flexDirection: 'column',
        position: 'relative',
        zIndex: 0.5
    },

    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '9em',
        paddingTop: '3em'
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

    },

    paper: {
        margin: '4em auto',
        backgroundColor: '#14342B50',
        paddingBottom: '6em',
        width: 900
    },

    player: {
        position: 'absolute',
        bottom: '0em'
    },
    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 16,
        marginLeft: 'auto',
        marginTop: 'auto'
    }
}));
export default useStyles;