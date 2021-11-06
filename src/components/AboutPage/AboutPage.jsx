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
        marginTop: '5em'
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
                                About Snippets:
                            </Typography>
                            <Typography variant="body2" component="p" className={text} paragraph={true}>
                                <p>

                                Without question, the most foundational tool for the modern songwriter is the smartphone.
                                The ability to record a voice memo at any second to document an idea makes it possible for an 
                                artist to save almost anything they ever thought of while working on a song.  Invariably, these 
                                voice memos become cluttered and wildly disorganized very quickly, and because the only indication of 
                                what one might contain is offered in its title, the context or concept nested within that recording can 
                                easily be lost.  
                                <br></br>
                                <br></br>
                                How did I play that part again?  Why does this sound like a different tuning than I've previously used?
                                Wait, what was that melody even going to be used for?  Where is that one that has that great lyric I thought of while riding the bus? 
                                <br></br>
                                <br></br>
                                I created Snippets to help me keep all the different details and moving parts of my unfinished songs centralized in a single concisely organized location. 
                                The homepage is a list of songs the user has added, organized in a patterned column list that color-codes the columns according 
                                to a pre-established set of priority tiers, so the user can group the songs according to when they hope to finish them. 
                                Finally, the user can route specific recordings into a details page for a given song - in addition to including this history of recordings for a given song, the details page contains all the relevant notes the user 
                                has added that will help them connect the dots when they return to work on the song.  The user can update these details as they prefer.
                                <br></br>
                                </p>
                            </Typography>
                         </CardContent>
                    </Card>
                </div>
                </div>
            </div>
          )
};

export default AboutPage;