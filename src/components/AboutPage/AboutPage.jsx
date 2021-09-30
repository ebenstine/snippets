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
                                Technologies Used:
                            </Typography>
                            <Typography variant="body2" component="p" className={text} paragraph={true}>
                                <p>
                                - React/Redux <br></br>
                                - Node JS <br></br>
                                - Postgres <br></br>
                                - Express <br></br>
                                - Material UI <br></br>
                                - React Dropzone S3 Uploader <br></br>
                                - Amazon Web Services <br></br></p> 
                            </Typography>
                         </CardContent>
                    </Card>
                </div>
                </div>
            </div>
          )
};

export default AboutPage;