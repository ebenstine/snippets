import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import QueueMusic from '@material-ui/icons/QueueMusic';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Menu from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    navLinks: {
      color: '#2a4f64',
      background:  'rgb(230, 252, 255)',
      '&:hover': {
          background:'#94d9eb',
          },
      margin: theme.spacing(1),
      border: "1px solid #eb9148",
      borderRadius: "3px",
      display: 'flex',
      justifyContent: 'center'
    },

    menu: {
      
      color: 'rgb(230, 252, 255)',
      '&:hover': {
      color:'#3b95ac'
      }
    },

}))


const NavMenu = ({user}) => {
    const dispatch = useDispatch();
    const {navLinks, menu} = useStyles();
    const [open, setOpen] = useState(false);
    const [showArchiveLink, setShowArchiveLink]= useState(false);
    const [showSongsListLink, setShowSongsListLink]= useState(false);
    const songs = useSelector((store) => store.songs);
   
  
    const handleClickOpen = () => {
      if (user === null){
        setOpen(false)
      } else
      setOpen(true);

      dispatch({
        
        type: 'FETCH_SONGS',
        type: 'FETCH_SONG_DETAILS'
        
      });
      handleLinksState();
    };

    const handleLinksState = () => {
      //checks for any occurrence of an inactive song - if any are found, show the link
      songs.filter(e => e.is_active === false).length ?

          setShowArchiveLink(true)
      
          : 

          setShowArchiveLink(false)
          
      //simpler check for any songs - if any are found, show the link
      songs.length ? 

          setShowSongsListLink(true)

          :

          setShowSongsListLink(false)
      }

    
    
    const handleClose = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <IconButton style={{marginTop: '.5em'}} size="small">
          <Menu 

            aria-controls="simple-menu" 
            aria-haspopup="true"
            fontSize={'inherit'} 
            align="center"
            className={menu}
            onClick={handleClickOpen}
            
            >
            
          </Menu>
        </IconButton>
        
          <MenuItem 
        
            onClick={handleClickOpen}>
                
          </MenuItem>
          
            <Dialog 
                
                open={open}
                  PaperProps={{
                    style: 
                          { 
                            border: "1px solid #2a4f64",
                            position: "fixed", top: 0, right: 0, m: 0, 
                            background: "rgb(199, 246, 252)"
                          }
            
                            }}
                
                onClose={handleClose}

            >
          {showSongsListLink ?
            <MenuItem
              className={navLinks}
          
            >
              <Link 
                
                to="/songsList"
                style = {{
            
                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap',
                  

                }}
                onClick={handleClose}
              >
            
                <QueueMusic/>
                
                <Typography component="h5">
                  
                  &nbsp;Active Songs

                </Typography> 
              
              </Link>
                
            
            </MenuItem>
          :
            null
          }     

            <MenuItem 
              className={navLinks}
            >
           
              <Link  
                to="/addSong"
                style = {{

                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
                onClick={handleClose}  

              >
            
                <PlaylistAdd/>  
            
                &nbsp;Add a Song
            
              </Link>

            </MenuItem>
          {showArchiveLink ?
            <MenuItem
              className={navLinks}
          
            >
              
              <Link 
                to="/InactiveArchive"
                style = {{
            
                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap'

                }}
                onClick={handleClose}
              >
            
            <img src="archive.png" style={{width:26, height:26}} ></img>
            
                  <Typography component="h5">
              
                    &nbsp;Inactive Archive
            
                  </Typography>

                </Link>
              
          
            </MenuItem>
          :
            null 
          }

          <MenuItem 
            className={navLinks}
          >
            
            <Link 
              to="/user"
              style = {{
                
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap'
                
                }}
                onClick={handleClose}
            > 
            
              <AccountCircle/> 
            
                &nbsp;Account
            
            </Link>
        
          </MenuItem>
        
        </Dialog>
        
      </div>
    );
  }
  
  export default NavMenu;