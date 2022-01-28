import React, { useState } from 'react';
import ColorCodeLegend from '../ColorCodeLegend';
import GroupOne from './GroupOne';
import GroupTwo from './GroupTwo';
import GroupThree from './GroupThree';
import GroupUncertain from './GroupUncertain';
import { Paper, DialogContent} from '@material-ui/core';


const CustomLists = () => {

    return (
        <>
            <Paper>
                
                <ColorCodeLegend/>
                    
                    
                    <DialogContent>    
                        <GroupOne/>
                            
                            <GroupTwo/>
                                
                                <GroupThree/>
                                    
                                    <GroupUncertain/>
                    </DialogContent>
                    
            
            </Paper>
        
        </>
    )

}

export default CustomLists;


  
          