import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';



import QueueMusic from '@material-ui/icons/QueueMusic';
import MenuBook from '@material-ui/icons/MenuBook';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Info from '@material-ui/icons/Info';
import Menu from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    heading: {
        color: '#2a4f64',
        background: '#fff099',
        '&:hover': {
            background:'#fde76c',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px"
    },

    menu: {
        marginBottom: '-.45em',
        color: '#e7e7e7',
        '&:hover': {
        color:'#3b95ac'
        }

    },

    

}))


const NavMenu = ({user}) => {
    const {heading, menu, menuSwitch} = useStyles();
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      if (user === null){
        setOpen(false)
      } else
      setOpen(true);
      
    };
    const handleClose = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <IconButton>
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
          
            <MenuItem
              className={heading}
          
            >
          
              <Link 
                
                to="/songsList"
                style = {{
            
                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap'

                }}
                onClick={handleClose}
              >
            
                <QueueMusic/>
                
                <Typography component="h5">
                  
                  &nbsp;View Active Songs

                </Typography> 
              
              </Link>
            
            </MenuItem>

            <MenuItem 
              className={heading}
            >
           
              <Link  
                to="/addSong"
                style = {{

                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap',
                
                }}
                onClick={handleClose}  

              >
            
                <PlaylistAdd/>  
            
                &nbsp;Add a New Song
            
              </Link>

            </MenuItem>

            <MenuItem
              className={heading}
          
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
            
                <MenuBook/>
            
                  <Typography component="h5">
              
                    &nbsp;View Inactive Archive
            
                  </Typography>

                </Link>
          
            </MenuItem>

          <MenuItem 
            className={heading}
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
            
                &nbsp;Account Info
            
            </Link>
        
          </MenuItem>
        
        </Dialog>
        
      </div>
    );
  }
  
  export default NavMenu;