import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InactiveArchive from '../InactiveArchive/InactiveArchive';
import InactiveSongDetails from '../InactiveArchive/InactiveSongDetails';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddSong from '../AddSong/AddSong';
import SongsList from '../SongsList/SongsList';
import SongDetails from '../SongDetails/SongDetails';
import AlbumPreview from '../AlbumPreview/AlbumPreview';
import GroupOne from '../SongsList/GroupOne';
import GroupTwo from '../SongsList/GroupTwo';
import GroupThree from '../SongsList/GroupThree';
import GroupUncertain from '../SongsList/GroupUncertain';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/songsList"
          >
            <SongsList />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/groupOne"
          >
            <GroupOne/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/groupTwo"
          >
            <GroupTwo/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/groupThree"
          >
            <GroupThree/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/groupUncertain"
          >
            <GroupUncertain/>
          </ProtectedRoute>

          <ProtectedRoute
           //logged in shows addSong page else shows LoginPage
            exact 
            path="/addSong"
           >
          <AddSong/>
          </ProtectedRoute>

          <ProtectedRoute
          //logged in shows songDetails page else shows LoginPage
          exact
          path="/songDetails/:id"
          >
          <SongDetails/>
          </ProtectedRoute>

          <ProtectedRoute
          //logged in shows songDetails page else shows LoginPage
          exact
          path="/InactiveSongDetails/:id"
          >
          <InactiveSongDetails/>
          </ProtectedRoute>

          <ProtectedRoute
          //logged in shows songDetails page else shows LoginPage
          exact
          path="/albumPreview/:id"
          >
          <AlbumPreview/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows archive else shows LoginPage
            exact
            path="/InactiveArchive"
          >
            <InactiveArchive/>
          </ProtectedRoute>
          



          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Login page
              <LoginPage/>
            }
          </Route>

          


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

