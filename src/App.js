import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import { MainHeader } from './shared/components/Navigation/MainHeader';
import { MainNavigation } from './shared/components/Navigation/MainNavigation';
import { UserPlaces } from './places/pages/UserPlaces';

function App() {
  return (
    <div className="App">
        
        <Router>
        <MainNavigation/>
        <main>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/:userId/places">
            <UserPlaces/>
            </Route>
            <Route exact path="/places">
              <NewPlace />
            </Route>
            <Redirect to="/" />
            </Switch>
            </main>
        </Router>
    </div>
  );
}

export default App;
