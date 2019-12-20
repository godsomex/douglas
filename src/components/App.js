import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const Men = () => {
    return <div>Men</div>;
};

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/men" component={Men} />
            </Switch>
        </div>
    );
}

export default App;
