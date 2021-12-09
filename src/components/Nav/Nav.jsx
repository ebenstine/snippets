import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Drawer } from '@material-ui/core';
import './Nav.css';
import { useSelector } from 'react-redux';
import QueueMusic from '@material-ui/icons/QueueMusic';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Info from '@material-ui/icons/Info';
import NavMenu from './NavMenu';
import { AppBar, Toolbar } from '@material-ui/core'

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav" position="relative">
      
      <Link to="/about">
        
        <h2 className="nav-title">▶ SNIPPETS</h2>
        
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