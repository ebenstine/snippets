import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        display: 'flex',
        margin: '0 1.5em',
        width: 650,
        justifyContent: 'center',
        background: '#14342B50',
        marginTop: '-5em'
    },
    text: {
        margin: '0, auto',
        textIndent: 40,
        width: 500,
        lineHeight: '1.8em',
        fontSize: 14.5,
        padding: '1em 0',
    },
    title: {
        paddingTop: '1em',
        fontSize: 25.5,
    },
}));

const AboutPage = () => {
    const { card, text, root, title } = useStyles();

    return (
        <div className='formSpacer' >
            <div className="container">
                <div className={root}>
                    <Card className={card} raised={true} >
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h5" align="center"  className={title}>
                                What is Snippets?
                            </Typography>
                            <Typography variant="body2" component="p" className={text} paragraph={true}>
                                If you’ve ever worked on a long term project you know that its easy to lose track of small changes.
                                If you’re a songwriter you know it is especially difficult to keep track of all the small ideas that go into
                                a great song. Lyrics and the many recordings of your song will surely be in six different places and ultimately you
                                lose a great lyric you wrote one day. Or, worse yet, you’ve lost your bearings on your work and why you
                                wrote it in the first place.  <br /> <br />

                            My application solves these problems by creating a quick and centralized method
                            to organize song ideas at their inception while also keeping a working draft.  Add a name, a few lyrics and
                            a recording that captures the idea and you’re off!  
                            </Typography>
                         </CardContent>
                    </Card>
                </div>
                </div>
            </div>
          )
};

export default AboutPage;