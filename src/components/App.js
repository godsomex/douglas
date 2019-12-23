import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './collections/Collection';
import Shop from './pages/Shop';
import Nav from '../components/Nav';
import SignInPage from './pages/SignInPage';

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/signin" component={SignInPage} />
            </Switch>
        </div>
    );
}

export default App;
