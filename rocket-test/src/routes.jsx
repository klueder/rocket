import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./views/Launches";
import App from './App'

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/launches" component={Launches} />
        </div>
    </Router>
);

export default Routes;