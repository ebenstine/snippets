import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import GroupOne from './CustomLists/GroupOne';
import GroupTwo from './CustomLists/GroupTwo';
import GroupThree from './CustomLists/GroupThree';
import GroupUncertain from './CustomLists/GroupUncertain';


import MoreHoriz from '@material-ui/icons/MoreHoriz'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    
    menu: {
       
        color: '#3b95ac',
        '&:hover': {
        color:'#2a4f64'
        }

    },

    dialogTitle: {

        color:'#2a4f64',
        background:'transparent',
        

    },

    titleText: {
      borderBottom: '1.5px solid #3b95ac',
      fontSize: 20

    }

    

}))


const ColorCodeLegend = () => {
    const {colorCode, colorCode1, colorCode2, colorCode3, menu, dialogTitle, titleText} = useStyles();
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
                      
                      {    
                        border: "1px solid #2a4f64",
                        position: "fixed", top: 68, right: 18, m: 50, 
                        background: '#d0f7fa'
                             
                      }
            
                }}
                onClose={handleCancel}

                >
            <DialogTitle className={dialogTitle}>
              
              <Typography className={titleText}>Completion Priority</Typography>
              
            </DialogTitle>

              <DialogContent>

                  <GroupOne/>

              </DialogContent>

                <DialogContent>

                    <GroupTwo/>

                </DialogContent>

                  <DialogContent>

                      <GroupThree/>

                  </DialogContent>
                  
                    <DialogContent>

                        <GroupUncertain/>

                    </DialogContent>
          
        
          </Dialog>
        
      </div>
    );
  }
  
  export default ColorCodeLegend;