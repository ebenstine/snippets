import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    colorCode: {
        
        background: 'rgb(230, 252, 255)',
        '&:hover': {
            background:'#f0a1a1',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        display:'flex',
                
        justifyContent:'center',
        paddingBottom: '.1em'
        
        
    },
    colorCode1: {
        
        background: 'rgb(230, 252, 255)',
        '&:hover': {
            background:'#afe4f1',
            color: '#f0a1a1'
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        color: '#1d778d',
        display:'flex',
                
        justifyContent:'center',
        paddingBottom: '.1em'
       
    },
    colorCode2: {
        color: 'rgb(230, 252, 255)',
        background:'rgb(230, 252, 255)',
        '&:hover': {
            background:'#ffb171',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        display:'flex',
                
        justifyContent:'center',
        paddingBottom: '.1em'
        
    },
    colorCode3: {
        color: 'rgb(230, 252, 255)',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
            background:'#fdd377',
            },
        margin: theme.spacing(1),
        border: "1px solid #3b95ac",
        borderRadius: "3px",
        display:'flex',
                
        justifyContent:'center',
        paddingBottom: '.1em'
       
    },

    menu: {
       
        color: '#3b95ac',
        '&:hover': {
        color:'#2a4f64'
        }

    },

    dialogTitle: {

        color:'#2a4f64',
        background:'transparent',
        display: 'flex',
        justifyContent: 'center'
        

    },

    titleText: {
      borderBottom: '1.5px solid #3b95ac',
      fontSize: 20

    }

    

}))


const ColorCodeLegend = () => {
    const {colorCode, colorCode1, colorCode2, colorCode3, menu, dialogTitle, titleText} = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const songs = useSelector((store) => store.songs)
    const albums = useSelector((store) => store.albums)

    useEffect(() => {
    
      dispatch({
          type: 'FETCH_ALBUMS', 
      
      });
      
  },[]);
   
  
    const handleClickOpen = () => {
      
        setOpen(true)

      
    };
    const handleCancel = () => {
      setOpen(false);
    }

  
    return (
      <>
       
        <div>
          {albums.length >= 2 ?
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
          :
            null
          }
          
          
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
              
              <Typography className={titleText}>
                <img src='albumCollection.png' style={{height:40, width:40}}></img>
              </Typography>
              
            </DialogTitle>
        
            <MenuItem
              className={colorCode1}
              
              >
              
              <Link 
                  to="/groupOne"
                  style = {{color: '#1d778d',}}
                  onClick={handleCancel}
              >
                
                <img src='menuVinyl.png' style={{height:22, width:22}}></img>
              </Link>
            </MenuItem>
            

          

            <MenuItem className={colorCode2}>
            
              <Link 
                  to="/groupTwo"
                  style = {{color: '#1d778d',}}
                  onClick={handleCancel}
                >
                
                <img src='menuVinyl.png' style={{height:22, width:22}}></img>
              
              </Link>
          
            </MenuItem>
            
            {albums.length >= 3 ?
              <MenuItem className={colorCode3}>
                
                <Link 
                    to="/groupThree"
                    style = {{color: '#1d778d',}}
                    onClick={handleCancel}
                > 
                
                  <img src='menuVinyl.png' style={{height:22, width:22}}></img>
                </Link>
            
              </MenuItem>
            :
              null
            }
          
          </Dialog>
          
        </div>
      
      </>
    );
  }
  
  export default ColorCodeLegend;