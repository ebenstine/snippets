import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import AddChordDiagram from '../../AddChordDiagram/AddChordDiagram';
import ChordDiagrams from '../../ChordDiagrams/ChordDiagrams';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    menuItems: {
        margin: theme.spacing(1),
        color: '#2a4f64',
        
       
        
        
        //borderBottom: '1px solid #6ca0ad',
        paddingLeft: '1em',
        paddingRight: '1em'
    },

    heading: {
      color: '#2a4f64',
      borderBottom: '1px solid #2a4f64',
      fontSize: 20
    }, 

    menuIcon: {
      color: '#3b95ac',
      '&:hover': {
        color:'#2a4f64'
      }

    }

}))


const SongInstrumentOptions = ({song}) => {
    const {heading, menuItems, menuIcon} = useStyles();
    const songs = useSelector (store => store.songs);
    const songDetails = useSelector(store => store.songDetails); 
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      
      if (song === null)
        {
          setOpen(false)
        } else
      
          setOpen(true);
    };
    
    const handleCancel = () => {
      setOpen(false);
    }
return (
<>

{songDetails.map((song) => {
  
    return (
      
      <>
        
        
        
        {song.primary_instrument === 'keyboard' ? 
          
          
            <IconButton>
            
            
            <Piano style={{color:'#1d778d', paddingBottom: '.1em'}}/>
            </IconButton>

            :

            song.primary_instrument === 'guitar' ?

            <IconButton>
            
            <b><img style={{width:18, height:18, paddingBottom:'.05em' }} src="plectrum.png"></img></b>
            
            </IconButton>

            :
            null

            }
        
        
          <MenuItem onClick={handleClickOpen}/>

         
          
            <Dialog 
                
              open={open} 
              onClose={handleCancel} 
              aria-labelledby="Rename song title input"
              PaperProps={{
                  
                style: { 
                      
                  border: "1px solid #2a4f64",
                  background: "rgb(199, 246, 252",
                  
                }
                  
              }}    
                
            >
          
              <DialogTitle>
            
                <Typography 
              
                  className={heading}>
              
                    Instrument Detail Menu
              
                </Typography>
           
              </DialogTitle>
          
                  <DialogContent className={menuItems}>
          
                   
          
                      </DialogContent>
          
                        <DialogContent className={menuItems}>
          
                          
          
                            </DialogContent>
          
          
          
            </Dialog>
        
    </>
    
    );
})}
</>

)
}
  
  export default SongInstrumentOptions;