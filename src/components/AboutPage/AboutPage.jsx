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
        background: 'linear-gradient(to right,  #9c9e9f 0%,#f6f6f6 100%)',
        marginTop: '5em',
        marginBottom: '6em',
        color: '#1a313f',
        border: '1px solid #eb9148'
    },
    text: {
        margin: '0, auto',
        textIndent: 40,
        width: 500,
        lineHeight: '1.8em',
        fontSize: 14.5,
        padding: '1em 0',
        borderBottom: "1.6px solid #6ca0ad"
    },
    title: {
        paddingTop: '1em',
        fontSize: 25.5,
        borderBottom: "1.6px solid #6ca0ad"

    },

    playIcon: {
        color:"#6ca0ad"
    }



}));

const AboutPage = () => {
    const { card, text, root, title, playIcon } = useStyles();

    return (
        <div className='formSpacer' >
            <div className="container">
                <div className={root}>
                    <Card className={card} raised={true} >
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h5" align="center"  className={title} >
                                About Snippets
                            </Typography>
                            <Typography variant="body2" component="p" className={text} paragraph={true}>
                                
                                <p>
                                    <span className={playIcon}>▶</span>

                                        &nbsp;Without question, the most foundational tool for the modern songwriter is the Voice Memos app.
                                        The ability to record anything at any second to document an idea makes it possible for an 
                                        artist to save every useful thought they ever had while working on a song.  Invariably, these 
                                        voice memos become cluttered and wildly disorganized very quickly, and because the only indication of 
                                        what one might contain is offered in its title, the context or concept nested within that recording can 
                                        easily be lost.  
                                </p>
                               
                                
                                <p>
                                    <span className={playIcon}>▶</span>

                                        &nbsp;How did I play that part again?  Why does this sound like a different tuning than I've previously used?
                                        Wait, what was that melody even going to be used for?  Where is that one that has that great lyric I thought of while riding the bus? 
                                </p>
                                
                                
                                <p>
                                    <span className={playIcon}>▶</span>

                                        &nbsp;Snippets mitigates this confusion by keeping all the different details and moving parts of a songwriter's unfinished songs centralized and easy to access. 
                                        It gives users the ability to add not just their song title and audio file, but all the details that might be relevant or even crucial when revisiting the song to continue writing.  
                                        These are viewable on the song's details page, where users can 
                                        also upload as many additional audio recordings connected to that song that they might have.  A color-coding system is used throughout the app that allows users 
                                        to demarcate a priority tier for each song, paving the way for structured planning of future releases, and facilitating a more focused songwriting 
                                        workflow.  Additionally, users can designate the working status of a song, allowing them to upload both active and inactive work, and then differentiate between the two and update as needed.  
                                        This is another intuitive step toward allowing the user to store all their unfinished work inside the app, no matter its state.  
                                </p>


                                <p>
                                    <span className={playIcon}>▶</span>

                                        &nbsp;Voice memos saved songwriters from forgetting important ideas.  Snippets takes the next step in organizing these ideas with details, structuring, and context, helping its 
                                        users maintain a more organized and ultimately more productive songwriting process. 
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