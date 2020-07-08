import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import SearchPage from "./pages/SearchPage/SearchPage";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route component={SearchPage} path="/" exact/>
                <Route component={MoviePage} path="/movie/details/:id" exact/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;
