import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '2em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        width: 350,
        maxHeight: 350,
        minHeight: 270,
        flexDirection: 'column',
        position: 'relative',
        zIndex: 0.5
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
    player: {
        position: 'absolute',
        bottom: '0em'
    },
    title: {
        fontFamily: 'Lato, sansSerif',
    }
}));
export default useStyles;