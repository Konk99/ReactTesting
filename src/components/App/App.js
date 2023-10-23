import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contact from "../Contact/Contact";
import HUD from "../HUD/HUD";
import Project from "../Project/Project";
import About from "../About/About";
import Main from "../Main/Main";

const App = () => (
    <BrowserRouter>
        <HUD>
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route exact path = '/contact' component = {Contact} />
                <Route exact path = '/project' component = {Project} />
                <Route exact path = '/about' component = {About} />
            </Switch>
        </HUD>
    </BrowserRouter>
);

export default App;