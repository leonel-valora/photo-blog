import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PostsGrid from './components/PostGrid';
import PostDetails from './components/PostGrid/PostDetails'
import PhotosGrid from './components/PhotoGrid';
import User from './components/User';

function App() {
  return (
  <Router>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Posts</Link>
          </li>
          <li>
            <Link className="nav-link" to="/photos">Photos</Link>
          </li>
        </ul>
      </div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
        <Route path="/photos">
          <PhotosGrid />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/">
          <PostsGrid />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
