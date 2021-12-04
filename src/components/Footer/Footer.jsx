import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5em 0',
        textAlign: 'center',
        zIndex: 0,
        background: '#2a4f64',
        borderTop: '1px solid #c8ecf5;',
        boxShadow: '1px 1px 8px rgb(112, 111, 111)',
        paddingTop: '-5em',
        fontSize: 12
        

    }
}));

const Footer = () => {
    const { root } = useStyles()
    return (
        <div className={root}>
            <footer> 
              
              &copy; Eben Stine
            
            </footer>
        </div>)

};

export default Footer;

