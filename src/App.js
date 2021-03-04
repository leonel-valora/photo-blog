import logo from './logo.svg';
import './App.css';
import PostsGrid from './PostsGrid';
import User from './User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PostDetails from './PostDetails';
import PhotosGrid from './PhotosGrid';

function App() {
  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
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

function Details() {
  return <h1>DEtails</h1>
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


export default App;
