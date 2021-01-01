import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GroupArray from '../../components/GroupArray'

const App = () => (
    <Router>
        <Route exact path="/" component={GroupArray} />
    </Router>
);

export default App;
