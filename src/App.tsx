import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route component={SearchPage} path="/" exact/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;
