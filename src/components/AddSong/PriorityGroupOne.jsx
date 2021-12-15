//test component for refactoring AddSong -- proved difficult due to clunky original component
import React, {useState} from 'react';
import { InputLabel, MenuItem, FormControl, Select, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

        priority1:{
            borderTop: '1px solid #3b95ac',
            borderLeft: '1px solid #3b95ac',
            borderRight: '1px solid #3b95ac',
        
            alignItems: 'center',
            //margin: '1ch',
            borderRadius: '2px',
            background: "#afe4f1",
            color: '#2a4f64'

        },

        setPriority1:{
            color: "#2a4f64",
            background: "rgb(230, 252, 255)",
            '&:hover': {
            background:'#afe4f1',
            },
            margin: theme.spacing(1),
            marginLeft: '3em',
            marginRight: '3em',
            border: '1px solid #3b95ac',
            borderRadius: '3px',
            paddingLeft: '2.7em'

        },

        setPriority2:{
            color: "#2a4f64",
            background: "rgb(230, 252, 255)",
        '   &:hover': {
            background:'#ffb171',
            },
            margin: theme.spacing(1),
            marginLeft: '3em',
            marginRight: '3em',
            border: '1px solid #3b95ac',
            borderRadius: '3px',
            paddingLeft: '2.7em'

        },

        setPriority3:{
            color: "#2a4f64",
            background: "rgb(230, 252, 255)",
            '&:hover': {
            background:'#fdd377',
            },
            margin: theme.spacing(1),
            marginLeft: '3em',
            marginRight: '3em',
        
            border: '1px solid #3b95ac',
            borderRadius: '3px',
            paddingLeft: '2.7em'

        },

        selectTitle:{

        }

}))

export default function PriorityGroupOne() {
  const { 
          priority1, 
          setPriority1,
          setPriority2,
          setPriority3,
          selectTitle

        } = useStyles();

  const [priority, setPriority] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Priority</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={priority}
          label="Priority"
          className={priority1}
          onChange={handleChange}
          
        >
          <DialogTitle value="" className={selectTitle}>
          &nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;
          </DialogTitle>
          <MenuItem value={'1'} className={setPriority1}>&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
          <MenuItem value={'2'} className={setPriority2}>&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
          <MenuItem value={'3'}className={setPriority3}>&nbsp;Group Three</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
