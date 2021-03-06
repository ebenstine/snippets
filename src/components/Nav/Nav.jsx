import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PlayArrowRounded } from '@mui/icons-material';
import './Nav.css';
import { useSelector } from 'react-redux';
import NavMenu from './NavMenu';

function Nav() {
  
  const user = useSelector((store) => store.user);

  return (
    <div className="nav" position="relative">
      
      <Link to="/about">
        
        <Typography style={{fontSize:19}} className="nav-title">/|| Snippets</Typography>
        
      </Link>
        <div>
          {/* If no user is logged in, show these links */}
          {user.id === null &&
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          }

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <NavMenu/>
            </>
          )}

          
        </div>
     
    </div>
  );
}

export default Nav;