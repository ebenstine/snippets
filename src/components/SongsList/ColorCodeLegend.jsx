import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';


import { Album } from '@material-ui/icons';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Info from '@material-ui/icons/Info';
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    colorCode: {
        color: '#2a4f64',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
            background:'#f0a1a1',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        paddingLeft:'2.2em'
    },
    colorCode1: {
        color: '#2a4f64',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
            background:'#c4fbff',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        paddingLeft: '3em'
    },
    colorCode2: {
        color: '#2a4f64',
        background:'rgb(230, 252, 255)',
        '&:hover': {
            background:'#ffb171',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        paddingLeft: '3em'
    },
    colorCode3: {
        color: '#2a4f64',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
            background:'#fdd377',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        paddingLeft: '2.7em'
    },

    menu: {
       
        color: '#3b95ac',
        '&:hover': {
        color:'#3b95ac'
        }

    },

    dialogTitle: {

        color:'#2a4f64',
        background:'transparent'

    }

    

}))


const ColorCodeLegend = () => {
    const {colorCode, colorCode1, colorCode2, colorCode3, menu, dialogTitle} = useStyles();
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      
        setOpen(true)

      
    };
    const handleCancel = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <IconButton>
          <MoreHoriz

            aria-controls="simple-menu" 
            aria-haspopup="true"
            fontSize={'inherit'} 
            align="center"
            className={menu}
            onClick={handleClickOpen}
            
            >
            
        </MoreHoriz>
      </IconButton>
        <MenuItem onClick={handleClickOpen}>
                
        </MenuItem>
          <Dialog 
                
                open={open}
                PaperProps={{
                    style: 
                        { border: "1px solid #3b95ac",
                             position: "fixed", top: 68, right: 18, m: 50, 
                             
                        }
            
                            }}
                onClose={handleCancel}

                >
        <DialogTitle className={dialogTitle} >Priority by Color Key</DialogTitle>
          
          <MenuItem
          className={colorCode1}
          
          >
          
          <Link to="/songsList"
          style = {{
            color:'#233d4d',
            display:'flex',
            flexWrap: 'wrap'

            }}
            onClick={handleCancel}
          >
            
            <Album/>
            <Typography component="h5">
            &nbsp;Group One
            </Typography>
            </Link>
          </MenuItem>

          <MenuItem className={colorCode2}>
           
            <Link  to="/songsList"
            style = {{
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap',
                
                
                 }}
                 onClick={handleCancel}     
            >
            <Album/>  
            &nbsp;Group Two
            </Link>

          </MenuItem>
          <MenuItem className={colorCode3}>
            
            <Link to="/songsList"
            style = {{
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap'
                 }}
                 onClick={handleCancel}
            > 
            
            <Album/> 
            &nbsp;Group Three
            </Link>
        
          </MenuItem>
          <MenuItem className={colorCode}>
            
            <Link to="/songsList"
            style = {{
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap'
                 }}
                 onClick={handleCancel}
            > 
            
            <IndeterminateCheckBoxIcon/> 
            &nbsp;None specified
            </Link>
        
          </MenuItem>
        
        </Dialog>
        
      </div>
    );
  }
  
  export default ColorCodeLegend;