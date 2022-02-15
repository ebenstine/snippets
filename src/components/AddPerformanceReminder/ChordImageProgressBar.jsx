import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

import { createTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '2em'
    },
}); 

const theme = createTheme({
    palette: {
        primary: {
            //brightish blue
            main: "#3b95ac",
        },
          secondary: {
            //lighter grey
            main: '#858585',
          },
    },
});

const ChordImageProgressBar = ({ progress, progressTitle }) => {
    
    const { root } = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                
                {progress > 0 &&
                    
                    <>
                        <Typography>
                            
                            {progressTitle}

                        </Typography>
                        
                        <div className={root}>

                            <LinearProgress 
                            
                                variant="determinate" 
                                value={progress} 
                                color="primary" 
                            />

                        </div>
                    </>
                }
            </ThemeProvider>
        </>
    )
}

export default ChordImageProgressBar;